import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { Chapter, Module } from '../../../../../_types/qursus';
import { Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

interface TreeNode {
    id: number;
    order: number;
    title: string;
    lessons?: TreeNode[];
}

export class FlatNode {
    constructor(
        public expandable: boolean,
        public title: string,
        public level: number,
        public id: number
    ) {}
}

@Component({
    selector: 'app-course-edition-panel',
    templateUrl: './course-edition-panel.component.html',
    styleUrls: ['./course-edition-panel.component.scss'],
})
export class CourseEditionPanelComponent implements OnInit, OnChanges {
    public modules: Module[] & TreeNode[] = [];

    treeControl: FlatTreeControl<any>;
    treeFlattener: MatTreeFlattener<TreeNode, FlatNode>;
    dataSource: MatTreeFlatDataSource<TreeNode, FlatNode>;
    expansionModel = new SelectionModel<any>(true);
    dragging: boolean = false;
    expandTimeout: any;
    expandDelay: number = 1000;

    dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    constructor(
        private router: Router,
        private api: ApiService
    ) {
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl<FlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

        this.dataChange.subscribe(data => this.rebuildTreeForData(data));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('modules')) {
            // this.dataChange.next(this.modules);
        }
    }

    transformer = (node: TreeNode, level: number) => new FlatNode(!!node.lessons, node.title, level, node.id);
    getLevel = (node: FlatNode) => node.level;
    isExpandable = (node: FlatNode) => node.expandable;
    getChildren = (node: TreeNode): Observable<any> => of(node.lessons);

    hasChild = (_: number, node: FlatNode) => node.expandable;

    ngOnInit(): void {
        this.getModulesRessources();
    }

    visibleNodes(): any[] {
        const result: any[] = [];

        function addExpandedChildren(node: any, expanded: string[]) {
            result.push(node);
            if (expanded.includes(node.id) && node.lessons) {
                node.lessons.map((child: any) => addExpandedChildren(child, expanded));
            }
        }

        this.dataSource.data.forEach(node => {
            addExpandedChildren(node, this.expansionModel.selected);
        });
        return result;
    }

    drop(event: CdkDragDrop<string[]>) {
        const visibleNodes = this.visibleNodes();
        const node = event.item.data;

        // recursive find function to find siblings of node
        function findNodeSiblings(arr: any[], id: string): any[] {
            let result: any;
            let subResult;
            arr.forEach((item, i) => {
                if (item.id === id) {
                    result = arr;
                } else if (item.lessons) {
                    subResult = findNodeSiblings(item.lessons, id);
                    if (subResult) {
                        result = subResult;
                    }
                }
            });
            return result;
        }

        // determine where to insert the node
        const nodeAtDest = visibleNodes[event.currentIndex];

        // ! Return wrong node
        // ensure validity of drop - must be same level
        const nodeAtDestFlatNode = this.treeControl.dataNodes.find(n => nodeAtDest.id === n.id);

        if (nodeAtDestFlatNode?.level !== node.level) {
            alert('Items can only be moved within the same level.');
            this.rebuildTreeForData(this.dataSource.data);
            return;
        }

        if (node.id === nodeAtDest.id) {
            return;
        }

        const newSiblings = findNodeSiblings(this.dataSource.data, nodeAtDest?.id);
        if (!newSiblings) {
            return;
        }
        const insertIndex = newSiblings.findIndex(s => s.id === nodeAtDest.id);

        // remove the node from its old place
        const siblings = findNodeSiblings(this.dataSource.data, node.id);
        const siblingIndex = siblings.findIndex(n => n.id === node.id);
        const nodeToInsert: TreeNode = siblings.splice(siblingIndex, 1)[0];
        if (nodeAtDest.id === nodeToInsert.id) {
            return;
        }

        // insert node
        if (nodeAtDest.id !== nodeToInsert.id) {
            newSiblings.splice(insertIndex, 0, nodeToInsert);
        }

        console.table({
            event: event,
            visibleNodes: visibleNodes,
            node: node,
            nodeAtDest: nodeAtDest,
            nodeAtDestFlatNode: nodeAtDestFlatNode,
            newSiblings: newSiblings,
            insertIndex: insertIndex,
            siblings: siblings,
            siblingIndex: siblingIndex,
            nodeToInsert: nodeToInsert,
        });

        // rebuild tree with mutated data
        this.rebuildTreeForData(this.dataSource.data);
    }

    /**
     * Experimental - opening tree nodes as you drag over them
     */
    dragStart() {
        this.dragging = true;
    }

    dragEnd() {
        this.dragging = false;
    }

    dragHover(node: FlatNode) {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(() => {
                this.treeControl.expand(node);
            }, this.expandDelay);
        }
    }

    dragHoverEnd() {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
        }
    }

    /**
     * The following methods are for persisting the tree expand state
     * after being rebuilt
     */

    rebuildTreeForData(data: any) {
        this.dataSource.data = data;
        this.expansionModel.selected.forEach(id => {
            const node = this.treeControl.dataNodes.find(n => n.id === id);
            this.treeControl.expand(node);
        });
    }

    private async getModulesRessources(): Promise<void> {
        const urlSegments: string[] = this.router.url.split('/');
        const courseId: number = +urlSegments[urlSegments.length - 2];
        try {
            const modules: Module[] & TreeNode[] = await this.api.collect(
                'qursus\\Module',
                ['course_id', '=', courseId],
                ['id', 'title', 'page_count', 'description', 'duration', 'order', 'chapter_count', 'course_id']
            );
            this.modules = modules.sort((a: Module, b: Module): number => a.order! - b.order!);
            await this.getLessonsRessources();
            this.dataChange.next(this.modules);
        } catch (error) {
            console.error(error, 'ADD ORDER FIELD INSIDE MODULES Controller of QURSUS Package !!!');
        }
    }

    private async getLessonsRessources(): Promise<void> {
        try {
            for (const module of this.modules) {
                await this.api
                    .collect('qursus\\Chapter', ['module_id', '=', module.id], ['id', 'title', 'order'])
                    .then(response => {
                        module.lessons = response.sort((a: Chapter, b: Chapter): number => a.order! - b.order!);
                    });
            }
        } catch (error) {
            console.error(error);
        }
    }

    private updateModuleOrder(module: Module): void {
        try {
            this.api.update('qursus\\Module', [module.id], { order: module.order });
        } catch (error) {
            console.error(error);
        }
    }
}

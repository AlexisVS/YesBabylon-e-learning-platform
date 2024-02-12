import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
})
export class ModuleEditComponent {
    public title: string =
        'Course Edit lorem ipsum dolor sit amet consectetur loremipsum dolor sit amet';
    public subtitle: string =
        'ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta in, nobis quam quis ratione reprehenderit sit ut velit veritatis?';
    public description: string =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet cupiditate dolore exercitationem expedita facilis, fuga id ipsam ipsum iure maxime 3nobis nostrum officia, optio porro quasi rerum! A.';

    constructor() {}
}

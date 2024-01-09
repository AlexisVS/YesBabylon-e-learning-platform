import {Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, ChangeDetectorRef} from '@angular/core';
import {FormControl} from '@angular/forms';

type mode = 'view' | 'edit';
type element = 'title' | 'subtitle' | 'description';

@Component({
	selector: 'app-input-transformer',
	templateUrl: './input-transformer.component.html',
	styleUrls: ['./input-transformer.component.scss']
})
export class InputTransformerComponent implements OnInit, OnChanges {

	@Input() textValue!: string;
	@Output() textValueChange = new EventEmitter<string>();

	@Input() element: element;
	@Input() rowNumber: number = 2;


	public mode: mode;

	public text: FormControl = new FormControl(this.textValue || '');

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		this.text.setValue(this.textValue);
		this.mode = 'view';
	}

	// lorsque le contexte est changé
	ngOnChanges(): void {
	}

	@HostListener('click', ['$event'])
	public onClick(event: Event): void {
		event.stopPropagation();

		if (this.mode === 'edit') {
			return;
		}
		this.text = new FormControl(this.textValue || '');
		this.mode = 'edit';
	};

	public onSubmit(event: Event): void {
		event.stopPropagation();

		this.textValueChange.emit(this.text.value);
		this.mode = 'view';
		this.changeDetectorRef.detectChanges();
	};

	public onCancel(event: Event): void {
		event.stopPropagation();

		this.text.setValue(this.textValue);
		this.mode = 'view';
	};

	public setInputElementClass(): string {
		if (!this.element) {
			return '';
		}

		return `text__course__${this.element}`;
	}

}

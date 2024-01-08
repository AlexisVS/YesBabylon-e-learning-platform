import {Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, ChangeDetectorRef} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'app-input-transformer',
	templateUrl: './input-transformer.component.html',
	styleUrls: ['./input-transformer.component.scss']
})
export class InputTransformerComponent implements OnInit, OnChanges {

	@Input() textValue!: string;
	@Output() textValueChange = new EventEmitter<string>();

	public isEditing: boolean = false;

	public text: FormControl = new FormControl(this.textValue || '');

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		this.text.setValue(this.textValue);
	};

	// lorsque le contexte est changé
	ngOnChanges(): void {
	}

	@HostListener('click', ['$event'])
	public onClick(event: Event): void {
		event.stopPropagation();

		if (this.isEditing) {
			return;
		}
		this.text = new FormControl(this.textValue || '');
		this.isEditing = true;
	};

	public onSubmit(event: Event): void {
		event.stopPropagation();

		this.textValueChange.emit(this.text.value);
		this.isEditing = false;
		this.changeDetectorRef.detectChanges();
	};

	public onCancel(event: Event): void {
		event.stopPropagation();

		this.text.setValue(this.textValue);
		this.isEditing = false;
	};

}

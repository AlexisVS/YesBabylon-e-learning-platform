import {NgModule} from '@angular/core';
import {InputTransformerComponent} from './input-transformer.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule
	],
	declarations: [
		InputTransformerComponent
	],
	exports: [
		InputTransformerComponent
	],
	providers: [],
})

export class InputTransformerModule {
}

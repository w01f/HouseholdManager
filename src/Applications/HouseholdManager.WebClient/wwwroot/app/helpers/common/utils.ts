import { AbstractControl } from '@angular/forms';

export class Utils {
	static isControlValuePresented(control: AbstractControl): boolean {
		let value = control.value;
		if (value === undefined || value === null) 
			return false;
		return value !== '';
	};
}
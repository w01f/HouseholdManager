import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Utils } from "../common/utils";

export class EmailValidator {
	// https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
	static createValidator(): ValidatorFn {
		return function validate(control: AbstractControl): { [key: string]: any } {
			if (!Utils.isControlValuePresented(control)) return null;
			let pattern =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			if (pattern.test(control.value)) {
				return null;
			}
			return { format: true };
		};
	}
}
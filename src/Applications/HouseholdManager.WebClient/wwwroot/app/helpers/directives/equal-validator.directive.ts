import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
	providers: [
		{
			provide:
			NG_VALIDATORS,
			useExisting: forwardRef(() => EqualValidatorDirective),
			multi: true
		}
	]
})

export class EqualValidatorDirective implements Validator {
	constructor( @Attribute('validateEqual') public validateEqual: string) { }

	validate(c: AbstractControl): { [key: string]: any } {
		let v = c.value;
		let e = c.root.get(this.validateEqual);
		if (e && v !== e.value) return {
			validateEqual: false
		}
		return null;
	}
}
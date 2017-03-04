import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { EmailValidator } from '../validators/email-validator';

@Directive({
	selector: '[email][formControlName],[email][formControl],[email][ngModel]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => EmailValidatorDirective),
		multi: true
	}]
})

export class EmailValidatorDirective implements Validator, OnInit {
	private validatorFunction: ValidatorFn;

	ngOnInit() {
		this.validatorFunction = EmailValidator.createValidator();
	}

	validate(control: AbstractControl): { [key: string]: any } {
		return this.validatorFunction(control);
	}
}
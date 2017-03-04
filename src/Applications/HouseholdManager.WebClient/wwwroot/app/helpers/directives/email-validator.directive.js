"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const email_validator_1 = require('../validators/email-validator');
let EmailValidatorDirective_1 = class EmailValidatorDirective {
    ngOnInit() {
        this.validatorFunction = email_validator_1.EmailValidator.createValidator();
    }
    validate(control) {
        return this.validatorFunction(control);
    }
};
let EmailValidatorDirective = EmailValidatorDirective_1;
EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [{
                provide: forms_1.NG_VALIDATORS,
                useExisting: core_1.forwardRef(() => EmailValidatorDirective),
                multi: true
            }]
    }), 
    __metadata('design:paramtypes', [])
], EmailValidatorDirective);
exports.EmailValidatorDirective = EmailValidatorDirective;
//# sourceMappingURL=email-validator.directive.js.map
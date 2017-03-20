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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var email_validator_1 = require('../validators/email-validator');
var EmailValidatorDirective = (function () {
    function EmailValidatorDirective() {
    }
    EmailValidatorDirective.prototype.ngOnInit = function () {
        this.validatorFunction = email_validator_1.EmailValidator.createValidator();
    };
    EmailValidatorDirective.prototype.validate = function (control) {
        return this.validatorFunction(control);
    };
    EmailValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return EmailValidatorDirective; }),
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
}());
exports.EmailValidatorDirective = EmailValidatorDirective;
//# sourceMappingURL=email-validator.directive.js.map
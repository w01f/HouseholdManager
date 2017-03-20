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
var noop = function () {
};
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.value = null;
        this.format = 'dd.mm.yy';
        this.dateChange = new core_1.EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    DatePickerComponent.prototype.writeValue = function (date) {
        this.value = date;
        $(this.input.nativeElement).datepicker('setDate', date ? new Date(date) : date);
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this.input.nativeElement).datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: this.format,
            onSelect: function () {
                var date = $(_this.input.nativeElement).datepicker('getDate');
                _this.value = date;
                _this.onChangeCallback(date);
                _this.onTouchedCallback();
                _this.dateChange.next(date);
            }
        })
            .datepicker('setDate', this.value);
    };
    DatePickerComponent.prototype.ngOnDestroy = function () {
        $(this.input.nativeElement).datepicker('destroy');
    };
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], DatePickerComponent.prototype, "input", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "format", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "dateChange", void 0);
    DatePickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datepicker',
            templateUrl: 'date-picker.component.html',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DatePickerComponent; }),
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=date-picker.component.js.map
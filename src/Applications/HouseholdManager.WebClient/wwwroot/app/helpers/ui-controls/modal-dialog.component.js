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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var exception_service_1 = require("../../services/exception.service");
var ModalDialogComponent = (function () {
    function ModalDialogComponent(componentFactoryResolver, compiler, cdRef, exceptionService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.cdRef = cdRef;
        this.exceptionService = exceptionService;
        this.onClose = new core_1.EventEmitter();
    }
    ModalDialogComponent.prototype.ngOnInit = function () { };
    ModalDialogComponent.prototype.open = function (modalComponent) {
        var _this = this;
        this.dialogResult = null;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(modalComponent);
        this.cmpRef = this.target.createComponent(factory);
        this.componentTitle = this.cmpRef.instance.title;
        this.cmpRef.instance.successCallback = function () {
            _this.modalDialog.close();
        };
        this.cmpRef.instance.errorCallback = function (exception) {
            var exceptionText = _this.exceptionService.getExceptionMessage(exception);
            _this.dialogResult = { type: 'error', text: exceptionText };
        };
        this.cdRef.detectChanges();
        this.modalDialog.open();
    };
    ModalDialogComponent.prototype.save = function () {
        this.dialogResult = null;
        if (this.cmpRef)
            this.cmpRef.instance.submit();
        else
            this.modalDialog.close();
    };
    __decorate([
        core_1.ViewChild('modalDialog'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ModalDialogComponent.prototype, "modalDialog", void 0);
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], ModalDialogComponent.prototype, "target", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalDialogComponent.prototype, "onClose", void 0);
    ModalDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "modal-dialog",
            templateUrl: "modal-dialog.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Compiler, core_1.ChangeDetectorRef, exception_service_1.ExceptionService])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());
exports.ModalDialogComponent = ModalDialogComponent;
//# sourceMappingURL=modal-dialog.component.js.map
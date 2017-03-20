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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authentication_service_1 = require("../../services/authentication.service");
var users_service_1 = require("../../services/users.service");
var exception_service_1 = require("../../services/exception.service");
var modal_dialog_component_1 = require("../../helpers/ui-controls/modal-dialog.component");
var user_profile_component_1 = require("../user-profile/user-profile.component");
var DashboardComponent = (function () {
    function DashboardComponent(router, authService, usersService, exceptionService, appSettings) {
        this.router = router;
        this.authService = authService;
        this.usersService = usersService;
        this.exceptionService = exceptionService;
        this.appSettings = appSettings;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadUserInfo();
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
    };
    DashboardComponent.prototype.editUserProfile = function () {
        this.modalDialog.open(user_profile_component_1.UserProfileComponent);
    };
    DashboardComponent.prototype.loadUserInfo = function () {
        var _this = this;
        this.usersService.getLoggedUserProfile()
            .then(function (userProfile) { return _this.userName = userProfile.firstName + ' ' + userProfile.lastName; })
            .catch(function (exception) { _this.exceptionService.handleAppException(exception); });
    };
    __decorate([
        core_1.ViewChild('modalDialog'), 
        __metadata('design:type', modal_dialog_component_1.ModalDialogComponent)
    ], DashboardComponent.prototype, "modalDialog", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "dashboard",
            templateUrl: "dashboard.component.html",
            providers: [users_service_1.UsersService]
        }),
        __param(4, core_1.Inject('AppSettings')), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, users_service_1.UsersService, exception_service_1.ExceptionService, Object])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
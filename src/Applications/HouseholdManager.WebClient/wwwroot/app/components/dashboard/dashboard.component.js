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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const authentication_service_1 = require("../../services/authentication.service");
let DashboardComponent = class DashboardComponent {
    constructor(router, authService, appSettings) {
        this.router = router;
        this.authService = authService;
        this.appSettings = appSettings;
    }
    getUserName() {
        let userInfo = this.authService.getUserInfo();
        if (userInfo == null)
            return "";
        return userInfo.firstName + " " + userInfo.lastName;
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/home']);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "dashboard",
        templateUrl: "dashboard.component.html"
    }),
    __param(2, core_1.Inject('AppSettings')), 
    __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
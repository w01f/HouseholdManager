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
var authentication_service_1 = require("./authentication.service");
var authenticated_http_service_1 = require("./authenticated-http.service");
var RequestState_1 = require("../models/common/RequestState");
var AuthException_1 = require("../models/exceptions/AuthException");
var ValidationException_1 = require("../models/exceptions/ValidationException");
var UsersService = (function () {
    function UsersService(router, authService, httpService) {
        this.router = router;
        this.authService = authService;
        this.httpService = httpService;
    }
    UsersService.prototype.getLoggedUserProfile = function () {
        var _this = this;
        var loginInfo = this.authService.getLoginInfo();
        if (loginInfo == null)
            throw new AuthException_1.AuthException(this.router.url, "Authentication error");
        var userId = loginInfo.userId;
        return this.httpService
            .authorizedGet("api/Users/" + userId)
            .then(function (requestResult) {
            switch (requestResult.state) {
                case RequestState_1.RequestState.Success:
                    return requestResult.data;
                case RequestState_1.RequestState.NotAuth:
                    throw new AuthException_1.AuthException(_this.router.url, "Authentication error");
                default:
                    throw requestResult.message;
            }
        });
    };
    UsersService.prototype.editUserProfile = function (userProfile) {
        var _this = this;
        return this.httpService
            .authorizedPost("api/Users/Edit", userProfile)
            .then(function (requestResult) {
            switch (requestResult.state) {
                case RequestState_1.RequestState.Success:
                    return true;
                case RequestState_1.RequestState.Failed:
                    var validationResults = requestResult.data;
                    throw new ValidationException_1.ValidationException(validationResults);
                case RequestState_1.RequestState.NotAuth:
                    throw new AuthException_1.AuthException(_this.router.url, "Authentication error");
                default:
                    throw requestResult.message;
            }
        });
    };
    UsersService.prototype.addData = function (name, price) {
        //this.data.push(new Purchase(name, false, price));
    };
    UsersService = __decorate([
        __param(0, core_1.Inject(router_1.Router)),
        __param(1, core_1.Inject(authentication_service_1.AuthenticationService)),
        __param(2, core_1.Inject(authenticated_http_service_1.AuthenticatedHttpService)), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, authenticated_http_service_1.AuthenticatedHttpService])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
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
require("rxjs/add/operator/toPromise");
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var exception_service_1 = require("./exception.service");
var RequestState_1 = require("../models/common/RequestState");
var AuthenticationService = (function () {
    function AuthenticationService(http, exceptionService, appSettings) {
        this.http = http;
        this.exceptionService = exceptionService;
        this.appSettings = appSettings;
        this.loginInfoKey = "loginInfo";
    }
    AuthenticationService.prototype.login = function (authRequest) {
        var _this = this;
        var url = this.appSettings.servicesUrl + "api/Authentication/GetToken";
        var body = authRequest;
        return this.http.post(url, body)
            .toPromise()
            .then(function (response) {
            var result = response.json();
            if (result.state === RequestState_1.RequestState.Success)
                localStorage.setItem(_this.loginInfoKey, JSON.stringify(result.data));
            return result;
        })
            .catch(function (exception) { _this.exceptionService.handleAppException(exception); });
    };
    AuthenticationService.prototype.checkLogin = function () {
        var loginInfo = localStorage.getItem(this.loginInfoKey);
        return loginInfo != null;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.loginInfoKey);
    };
    AuthenticationService.prototype.getLocalToken = function () {
        var loginInfoEncoded = localStorage.getItem(this.loginInfoKey);
        if (!loginInfoEncoded)
            return null;
        var loginInfo = JSON.parse(loginInfoEncoded);
        return loginInfo.token;
    };
    AuthenticationService.prototype.getLoginInfo = function () {
        var loginInfoEncoded = localStorage.getItem(this.loginInfoKey);
        if (!loginInfoEncoded)
            return null;
        return JSON.parse(loginInfoEncoded);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject('AppSettings')), 
        __metadata('design:paramtypes', [http_1.Http, exception_service_1.ExceptionService, Object])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map
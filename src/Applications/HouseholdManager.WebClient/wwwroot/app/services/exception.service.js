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
const router_1 = require('@angular/router');
const AuthException_1 = require("../models/exceptions/AuthException");
const RequestResult_1 = require("../models/common/RequestResult");
const RequestState_1 = require("../models/common/RequestState");
const alert_service_1 = require("./alert.service");
let ExceptionService = class ExceptionService {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
    }
    handleAppException(exception) {
        if (exception instanceof AuthException_1.AuthException) {
            let authException = exception;
            this.router.navigate(['/login', { returnUrl: authException.returnUrl }]);
            this.alertService.error(authException.message);
        }
        else if (exception instanceof Error) {
            let error = exception;
            this.alertService.error(error.message);
        }
        else
            this.alertService.error(exception);
    }
    handleRequestException(exception) {
        return new Promise(resolve => {
            let requestResult = new RequestResult_1.RequestResult();
            requestResult.state = RequestState_1.RequestState.Failed;
            requestResult.message = exception;
            resolve(requestResult);
        });
    }
};
ExceptionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [router_1.Router, alert_service_1.AlertService])
], ExceptionService);
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map
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
var router_1 = require('@angular/router');
var AuthException_1 = require("../models/exceptions/AuthException");
var ValidationException_1 = require("../models/exceptions/ValidationException");
var RequestResult_1 = require("../models/common/RequestResult");
var RequestState_1 = require("../models/common/RequestState");
var alert_service_1 = require("./alert.service");
var ExceptionService = (function () {
    function ExceptionService(router, alertService) {
        this.router = router;
        this.alertService = alertService;
    }
    ExceptionService.prototype.getExceptionMessage = function (exception) {
        if (exception instanceof AuthException_1.AuthException) {
            var authException = exception;
            return authException.message;
        }
        else if (exception instanceof ValidationException_1.ValidationException) {
            var valException = exception;
            var validationText_1 = [];
            valException.validationResults.forEach(function (validationResult) {
                validationText_1.push(validationResult.errorMessage);
            });
            return validationText_1;
        }
        else if (exception instanceof Error) {
            var error = exception;
            return error.message;
        }
        else
            return exception;
    };
    ExceptionService.prototype.handleAppException = function (exception) {
        if (exception instanceof AuthException_1.AuthException) {
            var authException = exception;
            this.router.navigate(['/login', { returnUrl: authException.returnUrl }]);
            this.alertService.error(this.getExceptionMessage(exception));
        }
        else
            this.alertService.error(this.getExceptionMessage(exception));
    };
    ExceptionService.prototype.handleRequestException = function (exception) {
        return new Promise(function (resolve) {
            var requestResult = new RequestResult_1.RequestResult();
            requestResult.state = RequestState_1.RequestState.Failed;
            requestResult.message = exception;
            resolve(requestResult);
        });
    };
    ExceptionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, alert_service_1.AlertService])
    ], ExceptionService);
    return ExceptionService;
}());
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map
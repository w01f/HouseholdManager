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
const authenticated_http_service_1 = require("./authenticated-http.service");
const RequestState_1 = require("../models/common/RequestState");
const AuthException_1 = require("../models/exceptions/AuthException");
class TasksService {
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
    }
    getData() {
        return this.httpService
            .authorizedGet("api/Tasks")
            .then(requestResult => {
            switch (requestResult.state) {
                case RequestState_1.RequestState.Success:
                    return requestResult.data;
                case RequestState_1.RequestState.NotAuth:
                    throw new AuthException_1.AuthException(this.router.url, "Authentication error");
                default:
                    throw requestResult.message;
            }
        });
    }
    addData(name, price) {
        //this.data.push(new Purchase(name, false, price));
    }
}
TasksService = __decorate([
    __param(0, core_1.Inject(router_1.Router)),
    __param(1, core_1.Inject(authenticated_http_service_1.AuthenticatedHttpService)), 
    __metadata('design:paramtypes', [router_1.Router, authenticated_http_service_1.AuthenticatedHttpService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map
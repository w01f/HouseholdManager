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
const core_1 = require("@angular/core");
const tasks_service_1 = require("../../services/tasks.service");
const exception_service_1 = require("../../services/exception.service");
let TasksComponent = class TasksComponent {
    constructor(dataService, exceptionService) {
        this.dataService = dataService;
        this.exceptionService = exceptionService;
        this.items = [];
    }
    addItem(name, price) {
        if (name == null || name.trim() === "")
            return;
        if (price == null)
            return;
        this.dataService.addData(name, price);
    }
    ngOnInit() {
        this.dataService.getData()
            .then(tasks => this.items = tasks)
            .catch(exception => { this.exceptionService.handleAppException(exception); });
    }
};
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "tasks-page",
        templateUrl: "tasks.component.html",
        providers: [tasks_service_1.TasksService]
    }), 
    __metadata('design:paramtypes', [tasks_service_1.TasksService, exception_service_1.ExceptionService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map
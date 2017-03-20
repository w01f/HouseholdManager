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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var app_component_1 = require('./components/app/app.component');
var app_routing_1 = require('./app.routing');
var _components_index_1 = require("./components/_components-index");
var _dynamic_components_index_1 = require("./components/_dynamic-components-index");
var _directives_index_1 = require("./helpers/directives/_directives-index");
var _ui_controls_index_1 = require("./helpers/ui-controls/_ui-controls-index");
var _services_index_1 = require("./services/_services-index");
var _guards_index_1 = require("./helpers/guards/_guards-index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                ng2_bs3_modal_1.Ng2Bs3ModalModule
            ],
            declarations: [
                _components_index_1.allComponents,
                _directives_index_1.allDirectives,
                _ui_controls_index_1.allUIControls
            ],
            entryComponents: [_dynamic_components_index_1.allDynamicComponents],
            providers: [
                _services_index_1.allServices,
                _guards_index_1.allGuards
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
function main(appSettings) {
    platform_browser_dynamic_1.platformBrowserDynamic([{ provide: 'AppSettings', useValue: appSettings }]).bootstrapModule(app_module_1.AppModule);
}
exports.main = main;
//# sourceMappingURL=main.js.map
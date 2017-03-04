"use strict";
const authentication_service_1 = require("./authentication.service");
const authenticated_http_service_1 = require("./authenticated-http.service");
const exception_service_1 = require("./exception.service");
const alert_service_1 = require("./alert.service");
exports.allServices = [
    authentication_service_1.AuthenticationService,
    authenticated_http_service_1.AuthenticatedHttpService,
    exception_service_1.ExceptionService,
    alert_service_1.AlertService
];
//# sourceMappingURL=_services-index.js.map
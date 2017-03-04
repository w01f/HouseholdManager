import { AuthenticationService } from "./authentication.service";
import { AuthenticatedHttpService } from "./authenticated-http.service";
import { ExceptionService } from "./exception.service";
import { AlertService } from "./alert.service";

export const allServices = [
	AuthenticationService,
	AuthenticatedHttpService,
	ExceptionService,
	AlertService
];
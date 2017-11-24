import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthException } from "../models/exceptions/AuthException";
import { ValidationException } from "../models/exceptions/ValidationException";
import { RequestResult } from "../models/common/RequestResult";
import { RequestState } from "../models/common/RequestState";
import { AlertService } from "./alert.service";

@Injectable()
export class ExceptionService {
	constructor(
		private router: Router,
		private alertService: AlertService
	) {
	}

	public getExceptionMessage(exception: any): any {
		if (exception instanceof AuthException) {
			let authException = exception as AuthException;
			return authException.message;
		} else if (exception instanceof ValidationException) {
			let valException = exception as ValidationException;
			let validationText: any[] = [];
			valException.validationResults.forEach(validationResult => {
				validationText.push(validationResult.errorMessage);
			});
			return validationText;
		} else if (exception instanceof Error) {
			let error = exception as Error;
			return error.message;
		} else
			return exception;
	}

	public handleAppException(exception: any) {
		if (exception instanceof AuthException) {
			let authException = exception as AuthException;
			this.router.navigate(['/login', { returnUrl: authException.returnUrl }]);
			this.alertService.error(this.getExceptionMessage(exception));
		} else
			this.alertService.error(this.getExceptionMessage(exception));
	}

	public handleRequestException(exception: any): Promise<RequestResult> {
		return new Promise(resolve => {
			let requestResult = new RequestResult();
			requestResult.state = RequestState.Failed;
			requestResult.message = exception;
			resolve(requestResult);
		});
	}
}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthException } from "../models/exceptions/AuthException";
import { RequestResult } from "../models/common/RequestResult";
import { RequestState } from "../models/common/RequestState";
import { AlertService } from "./alert.service";


@Injectable()
export class ExceptionService {
	constructor(
		private router: Router,
		private alertService: AlertService
	)
	{ }

	public handleAppException(exception: any) {
		if (exception instanceof AuthException) {
			let authException = exception as AuthException;
			this.router.navigate(['/login', { returnUrl: authException.returnUrl }]);
			this.alertService.error(authException.message);
		} else if (exception instanceof Error) {
			let error = exception as Error;
			this.alertService.error(error.message);
		} else
			this.alertService.error(exception);

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
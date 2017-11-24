import "rxjs/add/operator/toPromise";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from "@angular/http";
import { AuthenticationService } from "./authentication.service";
import { ExceptionService } from "./exception.service";
import { RequestResult } from "../models/common/RequestResult";

@Injectable()
export class AuthenticatedHttpService {
	constructor(
		private router: Router,
		private http: Http,
		private authService: AuthenticationService,
		private exceptionService: ExceptionService,
		@Inject('AppSettings') private appSettings: any
	) { }

	public authorizedPost(url: string, body: any): Promise<RequestResult> {
		let headers = this.initAuthHeaders();
		return this.http.post(this.appSettings.servicesUrl + url, body, { headers: headers }).toPromise()
			.then(response => {
				let requestResult = response.json() as RequestResult;
				return requestResult;
			})
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}

	public authorizedGet(url: any): Promise<RequestResult> {
		let headers = this.initAuthHeaders();
		return this.http.get(this.appSettings.servicesUrl + url, { headers: headers }).toPromise()
			.then(response => {
				let requestResult = response.json() as RequestResult;
				return requestResult;
			})
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}

	private initAuthHeaders(): Headers {
		let token = this.authService.getLocalToken();
		if (token == null) throw "No token";

		var headers = new Headers();
		headers.append("Authorization", "Bearer " + token.data);

		return headers;
	}
}
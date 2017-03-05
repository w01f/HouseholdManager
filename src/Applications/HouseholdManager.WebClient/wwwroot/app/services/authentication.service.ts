import "rxjs/add/operator/toPromise";
import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { ExceptionService } from "./exception.service";
import { RequestState } from "../models/common/RequestState";
import { RequestResult } from "../models/common/RequestResult";
import { LoginInfo } from "../models/auth/LoginInfo";
import { TokenInfo } from "../models/auth/TokenInfo";
import { AuthRequest } from "../models/auth/AuthRequest";

@Injectable()
export class AuthenticationService {
	private loginInfoKey = "loginInfo";

	constructor(
		private http: Http,
		private exceptionService: ExceptionService,
		@Inject('AppSettings') private appSettings: any) {
	}

	public login(authRequest: AuthRequest): Promise<RequestResult> {
		let url = this.appSettings.servicesUrl + "api/Authentication/GetToken";
		let body = authRequest;
		return this.http.post(url, body)
			.toPromise()
			.then(response => {
				let result = response.json() as RequestResult;
				if (result.state === RequestState.Success)
					localStorage.setItem(this.loginInfoKey, JSON.stringify(result.data as LoginInfo));
				return result;
			})
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}

	public checkLogin(): boolean {
		let loginInfo = localStorage.getItem(this.loginInfoKey);
		return loginInfo != null;
	}

	public logout() {
		localStorage.removeItem(this.loginInfoKey);
	}

	public getLocalToken(): TokenInfo {
		let loginInfoEncoded = localStorage.getItem(this.loginInfoKey);
		if (!loginInfoEncoded)
			return null;
		let loginInfo = JSON.parse(loginInfoEncoded) as LoginInfo;
		return loginInfo.token;
	}

	public getLoginInfo(): LoginInfo {
		let loginInfoEncoded = localStorage.getItem(this.loginInfoKey);
		if (!loginInfoEncoded)
			return null;
		return JSON.parse(loginInfoEncoded) as LoginInfo;
	}
}
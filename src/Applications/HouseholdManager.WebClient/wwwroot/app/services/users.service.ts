import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "./authentication.service";
import { AuthenticatedHttpService } from "./authenticated-http.service";
import { RequestState } from "../models/common/RequestState";
import { RequestResult } from "../models/common/RequestResult";
import { AuthException } from "../models/exceptions/AuthException";
import { UserProfileViewModel } from "../models/users/UserProfileViewModel";


export class UsersService {
	constructor(
		@Inject(Router) private router: Router,
		@Inject(AuthenticationService) private authService: AuthenticationService,
		@Inject(AuthenticatedHttpService) private httpService: AuthenticatedHttpService
	) { }

	public getLoggedUserProfile(): Promise<UserProfileViewModel> {
		let loginInfo = this.authService.getLoginInfo();
		if (loginInfo == null)
			throw new AuthException(this.router.url, "Authentication error");
		let userId = loginInfo.userId;
		return this.httpService
			.authorizedGet("api/Users/" + userId)
			.then(requestResult => {
				switch (requestResult.state) {
					case RequestState.Success:
						return requestResult.data as UserProfileViewModel;
					case RequestState.NotAuth:
						throw new AuthException(this.router.url, "Authentication error");
					default:
						throw requestResult.message;
				}
			});
	}

	public addData(name: string, price: number) {

		//this.data.push(new Purchase(name, false, price));
	}
}
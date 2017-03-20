import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "./authentication.service";
import { AuthenticatedHttpService } from "./authenticated-http.service";
import { RequestState } from "../models/common/RequestState";
import { RequestResult } from "../models/common/RequestResult";
import { ValidationResult } from "../models/common/ValidationResult";
import { AuthException } from "../models/exceptions/AuthException";
import { ValidationException } from "../models/exceptions/ValidationException";
import { UserProfileViewModel } from "../models/users/UserProfileViewModel";
import { UserProfileEditModel } from "../models/users/UserProfileEditModel";

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

	public editUserProfile(userProfile: UserProfileEditModel): Promise<boolean> {
		return this.httpService
			.authorizedPost("api/Users/Edit", userProfile)
			.then(requestResult => {
				switch (requestResult.state) {
					case RequestState.Success:
						return true;
					case RequestState.Failed:
						let validationResults = requestResult.data as Array<ValidationResult>;
						throw new ValidationException(validationResults);
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
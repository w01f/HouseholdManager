import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";
import { UsersService } from "../../services/users.service";
import { ExceptionService } from "../../services/exception.service";

@Component({
	moduleId: module.id,
	selector: "dashboard",
	templateUrl: "dashboard.component.html",
	providers: [UsersService]
})

export class DashboardComponent implements OnInit {
	private userName: string;

	constructor(
		private router: Router,
		private authService: AuthenticationService,
		private usersService: UsersService,
		private exceptionService: ExceptionService,
		@Inject('AppSettings') private appSettings: any
	)
	{ }

	ngOnInit(): void {
		this.usersService.getLoggedUserProfile()
			.then(userProfile => this.userName = userProfile.firstName + ' ' + userProfile.lastName)
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['/home']);
	}
}
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
	moduleId: module.id,
	selector: "dashboard",
	templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
	constructor(
		private router: Router,
		private authService: AuthenticationService,
		@Inject('AppSettings') private appSettings: any
	)
	{ }

	public getUserName(): string {
		let userInfo = this.authService.getUserInfo();
		if (userInfo == null) return "";
		return userInfo.firstName + " " + userInfo.lastName;
	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['/home']);
	}
}
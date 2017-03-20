import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";
import { UsersService } from "../../services/users.service";
import { ExceptionService } from "../../services/exception.service";
import { ModalDialogComponent } from "../../helpers/ui-controls/modal-dialog.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
	moduleId: module.id,
	selector: "dashboard",
	templateUrl: "dashboard.component.html",
	providers: [UsersService]
})

export class DashboardComponent implements OnInit {
	@ViewChild('modalDialog') private modalDialog: ModalDialogComponent;
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
		this.loadUserInfo();
	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['/home']);
	}

	public editUserProfile() {
		this.modalDialog.open(UserProfileComponent);
	}

	private loadUserInfo() {
		this.usersService.getLoggedUserProfile()
			.then(userProfile => this.userName = userProfile.firstName + ' ' + userProfile.lastName)
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}
}
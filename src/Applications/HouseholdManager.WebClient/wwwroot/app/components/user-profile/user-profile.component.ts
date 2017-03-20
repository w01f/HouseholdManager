import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UsersService } from "../../services/users.service";
import { ExceptionService } from "../../services/exception.service";
import { UserProfileViewModel } from "../../models/users/UserProfileViewModel";
import { UserProfileEditModel } from "../../models/users/UserProfileEditModel";
import { IModalComponent } from "../../models/common/IModalComponent";
import { GenderType } from "../../models/users/GenderType";

@Component({
	moduleId: module.id,
	selector: "user-profile",
	templateUrl: "user-profile.component.html",
	providers: [UsersService]
})

export class UserProfileComponent implements IModalComponent, OnInit {
	@ViewChild('formControl') private formControl: any;

	private originalUserProfile: UserProfileViewModel = new UserProfileViewModel();
	private editedUserProfile: UserProfileEditModel = new UserProfileEditModel();

	private genderTypes = GenderType;

	public title: string = "Profile";

	successCallback: Function = () => { };
	errorCallback: Function = () => { };

	constructor(
		private dataService: UsersService,
		private exceptionService: ExceptionService
	) { }

	ngOnInit(): void {
		this.dataService.getLoggedUserProfile()
			.then(userProfile => {
				this.originalUserProfile = userProfile;

				this.editedUserProfile.userId = userProfile.userId;
				this.editedUserProfile.firstName = userProfile.firstName;
				this.editedUserProfile.lastName = userProfile.lastName;
				this.editedUserProfile.gender = userProfile.gender;
				this.editedUserProfile.birthday = userProfile.birthday;
				this.editedUserProfile.passwordOriginal = '';
				this.editedUserProfile.passwordConfirm = '';
			})
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}

	public submit(): void {
		this.formControl.onSubmit();
	}

	private saveData(): Promise<boolean> {
		return this.dataService.editUserProfile(this.editedUserProfile)
			.then(() => {
				this.successCallback();
			})
			.catch(exception => {
				this.errorCallback(exception);
			});
	}
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from "../../services/alert.service";
import { RequestState } from "../../models/common/RequestState";
import { RequestResult } from "../../models/common/RequestResult";
import { AuthRequest } from "../../models/auth/AuthRequest";

@Component({
	moduleId: module.id,
	templateUrl: "login.component.html"
})

export class LoginComponent implements OnInit {
	private loading: boolean;
	private returnUrl: string;
	private authRequest: AuthRequest;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.authenticationService.logout();
		this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
		this.authRequest = new AuthRequest();
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.authRequest)
			.then(result => {
				this.loading = false;
				switch (result.state) {
					case RequestState.Success:
						this.router.navigate([this.returnUrl]);
						break;
					default:
						this.alertService.error(result.message);
						break;
				}
			});
	}
}

﻿import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import {AuthenticationService} from "../../services/authentication.service";

@Injectable()
export class HomeGuard implements CanActivate {

	constructor(private router: Router,
		private authenticationService: AuthenticationService) { }

	canActivate() {
		if (!this.authenticationService.checkLogin())
			return true;
		this.router.navigate(['/dashboard']);
		return false;
	}
}
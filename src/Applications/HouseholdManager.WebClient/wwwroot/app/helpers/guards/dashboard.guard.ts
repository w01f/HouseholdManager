import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Injectable()
export class DashboardGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router,
		private authenticationService: AuthenticationService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authenticationService.checkLogin())
			return true;
		this.router.navigate(['/login', { returnUrl: state.url }]);
		return false;
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.canActivate(route, state);
	}
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: "register.component.html"
})
export class RegisterComponent implements OnInit {
	ngOnInit() {
		//this.authenticationService.logout();
		//this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
		//this.authRequest = new AuthRequest();
	}
}
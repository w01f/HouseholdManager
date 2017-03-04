import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: "home",
	templateUrl: "home.component.html",
	styleUrls: ["home.component.css"]
})
export class HomeComponent {
	constructor(
		private router: Router,
		@Inject('AppSettings') private appSettings: any
	)
	{ }

	public openApplication() {
		this.router.navigate(['/dashboard']);
	}
}
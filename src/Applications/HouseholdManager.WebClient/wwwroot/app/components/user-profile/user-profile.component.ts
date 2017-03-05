import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	moduleId: module.id,
	selector: "user-profile",
	templateUrl: "user-profile.component.html"
})

export class UserProfileComponent implements OnInit {
	@ViewChild('modalDialog') modalDialog: ModalComponent;

	ngOnInit(): void { }

	open() {
		this.modalDialog.open();
	}
}
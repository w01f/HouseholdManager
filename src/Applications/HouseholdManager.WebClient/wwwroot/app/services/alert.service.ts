import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
	private mainWindowQueue = new Subject<any>();
	private keepAfterNavigationChange = false;

	constructor(private router: Router) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (this.keepAfterNavigationChange) {
					this.keepAfterNavigationChange = false;
				} else {
					this.mainWindowQueue.next();
				}
			}
		});
	}

	public success(message: string, keepAfterNavigationChange = false) {
		this.keepAfterNavigationChange = keepAfterNavigationChange;
		this.mainWindowQueue.next({ type: 'success', text: message });
	}

	public error(message: string, keepAfterNavigationChange = false) {
		this.keepAfterNavigationChange = keepAfterNavigationChange;
		this.mainWindowQueue.next({ type: 'error', text: message });
	}

	public getMessage(): Observable<any> {
		return this.mainWindowQueue.asObservable();
	}
}
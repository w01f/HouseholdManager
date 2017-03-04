import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedHttpService } from "./authenticated-http.service";
import { RequestState } from "../models/common/RequestState";
import { RequestResult } from "../models/common/RequestResult";
import { Task } from "../models/tasks/Task";
import { AuthException } from "../models/exceptions/AuthException";

export class TasksService {
	constructor(
		@Inject(Router) private router: Router,
		@Inject(AuthenticatedHttpService) private httpService: AuthenticatedHttpService
	) { }

	public getData(): Promise<Task[]> {
		return this.httpService
			.authorizedGet("api/Tasks")
			.then(requestResult => {
				switch (requestResult.state) {
					case RequestState.Success:
						return requestResult.data as Task[];
					case RequestState.NotAuth:
						throw new AuthException(this.router.url, "Authentication error");
					default:
						throw requestResult.message;
				}
			});
	}

	public addData(name: string, price: number) {

		//this.data.push(new Purchase(name, false, price));
	}
}
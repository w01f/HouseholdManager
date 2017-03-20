import { Component, OnInit } from "@angular/core";
import { TasksService } from "../../services/tasks.service";
import { ExceptionService } from "../../services/exception.service";
import { Task } from "../../models/tasks/Task";

@Component({
	moduleId: module.id,
	selector: "tasks-page",
	templateUrl: "tasks.component.html",
	providers: [TasksService]
})

export class TasksComponent implements OnInit {
	private items: Task[] = [];

	constructor(
		private dataService: TasksService,
		private exceptionService: ExceptionService
	) { }

	addItem(name: string, price: number): void {

		if (name == null || name.trim() === "")
			return;
		if (price == null)
			return;

		this.dataService.addData(name, price);
	}

	ngOnInit() {
		this.dataService.getData()
			.then(tasks => this.items = tasks)
			.catch(exception => { this.exceptionService.handleAppException(exception); });
	}
}
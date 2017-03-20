import {
	NgModule,
	Component,
	Compiler,
	ViewContainerRef,
	ViewChild,
	Input,
	Output,
	ComponentRef,
	ComponentFactory,
	ComponentFactoryResolver,
	ChangeDetectorRef,
	OnInit,
	Type,
	EventEmitter
} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IModalComponent } from "../../models/common/IModalComponent";
import { ExceptionService } from "../../services/exception.service";

@Component({
	moduleId: module.id,
	selector: "modal-dialog",
	templateUrl: "modal-dialog.component.html"
})

export class ModalDialogComponent implements OnInit {
	@ViewChild('modalDialog') private modalDialog: ModalComponent;
	@ViewChild('target', { read: ViewContainerRef }) target;

	@Output() onClose: EventEmitter<any> = new EventEmitter();

	private cmpRef: ComponentRef<IModalComponent>;
	private componentTitle: string;
	private dialogResult: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private compiler: Compiler,
		private cdRef: ChangeDetectorRef,
		private exceptionService: ExceptionService)
	{ }

	ngOnInit(): void { }

	public open(modalComponent: Type<IModalComponent>) {
		this.dialogResult = null;

		if (this.cmpRef) {
			this.cmpRef.destroy();
		}

		let factory = this.componentFactoryResolver.resolveComponentFactory(modalComponent);
		this.cmpRef = this.target.createComponent(factory);
		this.componentTitle = this.cmpRef.instance.title;
		this.cmpRef.instance.successCallback = () => {
			this.modalDialog.close();
		}
		this.cmpRef.instance.errorCallback = exception => {
			let exceptionText = this.exceptionService.getExceptionMessage(exception);
			this.dialogResult = { type: 'error', text: exceptionText };
		}
		this.cdRef.detectChanges();

		this.modalDialog.open();
	}

	private save() {
		this.dialogResult = null;
		if (this.cmpRef)
			this.cmpRef.instance.submit();
		else
			this.modalDialog.close();
	}
}
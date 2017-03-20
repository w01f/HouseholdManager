export interface IModalComponent {
	title: string;
	submit(): void;
	successCallback: Function;
	errorCallback: Function;
}
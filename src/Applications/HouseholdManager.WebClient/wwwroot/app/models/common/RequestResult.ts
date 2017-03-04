import { RequestState } from "./RequestState";

export class RequestResult {
	public state: RequestState;
	public message: string;
	public data: Object;
}
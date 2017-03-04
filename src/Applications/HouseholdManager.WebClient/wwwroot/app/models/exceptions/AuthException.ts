import { BaseException } from "./BaseException";

export class AuthException extends BaseException {
	constructor(public returnUrl: string, message?: string) {
		super(message);
		this.name = "AuthException";
	}
}
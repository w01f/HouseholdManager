import { BaseException } from "./BaseException";
import { ValidationResult } from "../common/ValidationResult";

export class ValidationException extends BaseException {
	constructor(public validationResults: Array<ValidationResult>) {
		super("Validation is failed");
		this.name = "ValidationException";
	}
}
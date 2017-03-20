import {GenderType} from "./GenderType";

export class UserProfileEditModel {
	public userId: number;
	public firstName: string;
	public lastName: string;
	public gender: GenderType;
	public birthday: Date;
	public passwordOriginal: string;
	public passwordConfirm: string;
}
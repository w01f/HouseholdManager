import {GenderType} from "./GenderType";

export class UserProfileViewModel {
	public userId: number;
	public email: string;
	public firstName: string;
	public lastName: string;
	public gender: GenderType;
	public birthday: Date;
}
import {GenderType} from "./GenderType";

export class UserProfileViewModel {
	public userId: number;
	public firstName: string;
	public lastName: string;
	public gender: GenderType;
	public birtday: Date;
}
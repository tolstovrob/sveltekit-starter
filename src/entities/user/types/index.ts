export interface IUserCredentials {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	avatarURL: string;
	email: string;
}

export interface IUser extends IUserCredentials {}

export interface IUserLogin {
	username: string;
	password: string;
}

export interface IUserRegister {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface IUserLogout {
	message: string;
}

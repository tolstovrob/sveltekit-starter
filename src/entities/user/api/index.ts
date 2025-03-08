import { IRESTClient, type Response } from '$shared/api';
import type { IUserCredentials, IUserLogout } from '../types';

export class User extends IRESTClient {
	public constructor() {
		super();
	}

	public async userSession(): Promise<IUserCredentials | null> {
		if (this.debug) {
			return new Promise<IUserCredentials>((resolve) =>
				setTimeout(
					() =>
						resolve({
							id: 69,
							username: 'abaunda',
							firstName: 'Abobus',
							lastName: 'Zeliboba',
							email: 'abaunda69@gmail.com',
							avatarURL: 'default.webp',
						}),
					2000,
				),
			);
		}

		const { status, id, username, firstName, lastName, email, avatarURL } =
			(await this.get<IUserCredentials>('/session')) as Response<IUserCredentials>;
		if (status !== 200) return null;
		return { id, username, firstName, lastName, email, avatarURL };
	}

	public async logout(): Promise<IUserLogout> {
		if (this.debug) {
			return new Promise<IUserLogout>((resolve) =>
				setTimeout(() => resolve({ message: 'Successfully logged out' }), 2000),
			);
		}

		return (await this.post<{}, IUserLogout>('/logout', {})) as IUserLogout;
	}
}

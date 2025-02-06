import { API_PATH } from "../_common/consts";
import { request } from "../_common/request";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
type UserId = string;

export const usersService = {
	getUsers: async () => {
		await delay(3000);
		const options = {
			method: "GET",
			url: API_PATH.USERS,
		};

		return request(options);
	},
	getUser: (id: UserId) => {
		// fetch user from the server by id
	},
	updateUser: (user: IUser) => {
		// update user in the server
	},
	deleteUser: (id: UserId) => {
		// delete user from the server
	},
};

import { API_PATH } from "../_common/consts";
import { request } from "../_common/request";

type PostId = string;

export const postsService = {
	getPosts: () => {
		const options = {
			method: "GET",
			url: API_PATH.POSTS,
		};

		return request(options);
	},
	getPost: (id: PostId) => {
		// fetch user from the server by id
	},
	addPost: (post: IPostFormValues) => {
		console.log(post);

		const options = {
			method: "POST",
			url: API_PATH.POSTS,
			body: JSON.stringify(post),
		};

		return request(options);
	},
	updatePost: (user: IUser) => {
		// update user in the server
	},
	deletePost: (id: PostId) => {
		// delete user from the server
	},
};

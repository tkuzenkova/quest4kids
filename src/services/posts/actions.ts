"use server";

import { postsService } from "./service";

export async function addPostAction(data: IPostFormValues) {
	const result = await postsService.addPost(data);

	return { success: !!result.id };
}

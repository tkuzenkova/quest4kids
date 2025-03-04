import Heading from "@/components/layout/Heading";
import Button from "@/components/ui/Button";
import { DICTIONARY_PATH } from "@/core/consts/dictionary";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getPosts } from "@/core/services/posts/api";
import { getDictionary } from "get-dictionary";
import PostsList from "../../../_components/PostsList";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function PostsPage() {
	const dic = await getDictionary(DICTIONARY_PATH.POSTS);
	const posts = await getPosts();

	return (
		<>
			<div className="flex items-center justify-between px-6">
				<Heading>{dic["Posts"]}</Heading>
				<div>
					<Button href={PAGE_PATH.POSTS_NEW}>
						{dic["Add New Post"]}
					</Button>
					<Button href={PAGE_PATH.POSTS_NEW_SERVER} className="ml-2">
						{dic["Add New Post"] + " - Server Action"}
					</Button>
				</div>
			</div>
			<div className="m-auto max-w-7xl">
				<PostsList posts={posts} />
			</div>
		</>
	);
}

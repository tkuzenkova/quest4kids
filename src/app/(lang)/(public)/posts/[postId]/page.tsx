import Heading from "@/components/layout/Heading";
import Button from "@/components/ui/Button";
import { DICTIONARY_PATH } from "@/core/consts/dictionary";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getPost, getPosts } from "@/core/services/posts/api";
import { getDictionary } from "get-dictionary";

interface PageProps {
	params: Promise<{ postId: string }>;
}

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts?.map((post: { id: number }) => ({
		postId: post.id.toString(),
	}));
}

export const revalidate = 3600;

export default async function PostPage({ params }: PageProps) {
	const { postId } = await params;
	const post = await getPost(postId);
	const dict = await getDictionary(DICTIONARY_PATH.COMMON);

	return (
		<>
			<div className="flex items-center justify-between px-6">
				<Button href={PAGE_PATH.POSTS}>{dict["Go Back"]}</Button>
			</div>
			<div className="mx-auto max-w-2xl p-6">
				<Heading type={1}>{post.title}</Heading>
				<p className="mt-2">{post.body}</p>
			</div>
		</>
	);
}

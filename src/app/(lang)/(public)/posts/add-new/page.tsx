import Heading from "@/components/layout/Heading";
import PostForm from "../_components/PostForm";

export default function AddPostPage() {
	return (
		<>
			<Heading type={1}>Add Post</Heading>
			<PostForm />
		</>
	);
}

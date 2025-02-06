import Heading from "@/components/layout/Heading";
import LinkComponent from "@/components/ui/LinkComponent";
import { PAGE_PATH } from "@/core/consts/page-path";
import SignupForm from "./_components/SignupForm";

export default function SignUpPage() {
	return (
		<>
			<Heading>Create Account</Heading>
			<SignupForm />
			<div className="mt-4">
				Already have an account?&nbsp;
				<LinkComponent href={PAGE_PATH.AUTH}>Go to Login</LinkComponent>
			</div>
		</>
	);
}

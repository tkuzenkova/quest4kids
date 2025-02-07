import Heading from "@/components/layout/Heading";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";
import LinkComponent from "@/components/ui/LinkComponent";
import { PAGE_PATH } from "@/core/consts/page-path";
import LoginForm from "./_components/LoginForm";

export default function AuthPage() {
	return (
		<>
			<Heading>Login</Heading>
			<LoginForm />
			<div className="mt-4">
				Don't have an account?&nbsp;
				<LinkComponent href={PAGE_PATH.SIGNUP}>Sign Up</LinkComponent>
			</div>
			<div className="mt-4">
				<GoogleLoginButton />
			</div>
		</>
	);
}

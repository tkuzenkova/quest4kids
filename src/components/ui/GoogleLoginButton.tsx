"use client";

import supabase from "@/core/services/supabase/supabase";
import { Button } from "@headlessui/react";

export default function GoogleLoginButton() {
	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		});

		if (error) {
			console.error("Login failed:", error.message);
		}
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<Button
				onClick={signInWithGoogle}
				className="rounded-lg bg-blue-500 px-6 py-3 text-white data-[hover]:bg-blue-400"
			>
				Login with Google
			</Button>
		</div>
	);
}

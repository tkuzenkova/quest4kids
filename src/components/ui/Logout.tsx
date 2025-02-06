"use client";

import { useLogout } from "@/core/services/auth/useLogout";
import Button from "./Button";

function Logout({ text }: { text: string }) {
	const { logout, isLoading } = useLogout();

	return <Button onClick={logout}>{text}</Button>;
}

export default Logout;

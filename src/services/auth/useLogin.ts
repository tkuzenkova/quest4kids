import { PAGE_PATH } from "@/core/consts/page-path";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginApi } from "./service";

export const useLogin = () => {
	const router = useRouter();

	const { mutate: login, isPending: isLoading } = useMutation({
		mutationFn: loginApi,
		onSuccess: () => {
			router.push(PAGE_PATH.DASHBOARD);
		},
		onError: () => {
			toast.error("Provided email or password are incorrect");
		},
	});

	return { login, isLoading };
};

import { Description, Field, Input, Label } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

// TODO: Add readOnly, isDisabled props, styles for Dark Theme, focus styles, and validation logic
interface InputFieldProps {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	error?: string;
	register: UseFormRegisterReturn;
	isRequired?: boolean;
	description?: string;
	as?: "textarea";
	isLoading?: boolean; // TODO: Add loading state and implement loading spinner
}

export const InputField: FC<InputFieldProps> = ({
	label,
	id,
	type = "text",
	placeholder = "",
	error,
	register,
	isRequired = false,
	description = "",
	as,
	isLoading,
}) => {
	return (
		<div className="my-4 w-full max-w-md">
			<Field>
				<Label
					htmlFor={id}
					className="text-sm/6 font-medium text-slate-700 dark:text-white/50"
				>
					{label}
					{/* TODO: Replace with custom component */}
					{isRequired && <span className="text-danger"> *</span>}
				</Label>
				<Description className="text-sm/6 text-slate-500 dark:text-white/50">
					{description}
				</Description>
				<Input
					className={clsx(
						"mt-3 block w-full rounded-lg border-none bg-slate-700/5 px-3 py-1.5 text-sm/6 text-slate-700 dark:bg-white/5 dark:text-white",
						"focus:outline-primary/25 data-[focus]:outline-2 data-[focus]:-outline-offset-2 dark:focus:outline-white/25",
						"data-[disabled]:bg-slate-200/10 dark:data-[disabled]:bg-white/10",
						error ? "border-danger" : "",
					)}
					id={id}
					{...(as !== "textarea" && { type })}
					placeholder={placeholder}
					as={as}
					disabled={isLoading}
					{...register}
				/>
				{error && (
					// TODO: Replace with custom error message component
					<div className="pointer-events-none flex items-center pr-3 text-sm/6">
						<ExclamationCircleIcon
							className="text-danger mr-2 h-5 w-5"
							aria-hidden="true"
						/>
						{error}
					</div>
				)}
			</Field>
		</div>
	);
};

import React from "react";

interface FormFieldProps {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
}

function FormField({
	label,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}: FormFieldProps) {
	const surpriseMeBtn = isSurpriseMe && (
		<button
			type="button"
			className="px-2 py-1 text-xs font-semibold bg-gray-500 rounded-md"
			onClick={handleSurpriseMe}
		>
			Surprise me
		</button>
	);

	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center gap-2">
				<label htmlFor={name} className="text-base font-medium text-gray-700">
					{label}
				</label>
				{surpriseMeBtn}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
			/>
		</div>
	);
}

export default FormField;

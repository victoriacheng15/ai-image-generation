function FormField({
	label,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
	required,
}: FormFieldProps) {
	const surpriseMeBtn = isSurpriseMe && (
		<button
			type="button"
			className="px-2 py-1 text-sm font-semibold bg-blue-900 text-slate-100 rounded-md"
			onClick={handleSurpriseMe}
		>
			Surprise me
		</button>
	);

	return (
		<>
			<div className="flex items-center gap-2 mb-2">
				<label htmlFor={name} className="text-base font-medium text-gray-700">
					{label}
				</label>
				{surpriseMeBtn}
			</div>
			{required ? (
				<input
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
					required
				/>
			) : (
				<input
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
				/>
			)}
		</>
	);
}

export default FormField;

function GenerateButton({
	btnText,
	onClick,
	hasPrompt,
}: { btnText: string; onClick: () => void; hasPrompt: string }) {
	return (
		<>
			{hasPrompt ? (
				<button
					type="button"
					onClick={onClick}
					className="text-slate-100 bg-blue-900 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				>
					{btnText}
				</button>
			) : (
				<button
					type="button"
					onClick={onClick}
					className="text-slate-100 bg-blue-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					disabled
				>
					{btnText}
				</button>
			)}
		</>
	);
}

export default GenerateButton;

interface FormFieldProps {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
	required?: boolean;
}

interface CardProps {
	_id: string;
	name: string;
	prompt: string;
	photo: string;
}

interface RenderCardProp {
	data: PostResponse[];
	title: string;
}

interface SocialProps {
	icon: React.ReactNode;
	href: string;
	label: string;
}

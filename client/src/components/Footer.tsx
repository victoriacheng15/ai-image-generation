import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

function Footer() {
	return (
		<footer className="py-2 mt-auto bg-blue-200">
			<div className="w-11/12 mx-auto max-w-7xl">
				<p className="flex items-center justify-center gap-2">
					Coded by Victoria |{" "}
					<Social
						href="https://github.com/victoriacheng15/ai-image-generation#readme"
						icon={<SiGithub />}
					/>{" "}
					|{" "}
					<Social
						href="https://twitter.com/viktoriacheng1"
						icon={<SiLinkedin />}
					/>{" "}
					|{" "}
					<Social
						href="https://www.linkedin.com/in/victoriacheng15/"
						icon={<SiTwitter />}
					/>
				</p>
			</div>
		</footer>
	);
}

export default Footer;

function Social({ icon, href }: SocialProps) {
	return (
		<a
			className="duration-300 ease-in-out hover:text-blue-900"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{icon}
		</a>
	);
}

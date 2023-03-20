import { AiOutlineDownload } from "react-icons/ai";
import { downloadImage } from "../utils";

function Card({ _id, name, prompt, photo }: CardProps) {
	return (
		<article className="relative rounded-xl group shadow-card hover:shadow-cardhover card">
			<div className="max-w-full h-full">
				<img
					className="w-full h-auto object-cover"
					width={1024}
					height={1024}
					src={photo}
					alt={prompt}
					loading="lazy"
				/>
			</div>
			<div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gray-900 m-2 p-4 rounded-md">
				<p className="overflow-y-auto text-sm text-white prompt">{prompt}</p>
				<div className="flex items-center justify-between gap-2 mt-5">
					<div className="flex items-center gap-2">
						<div className="flex items-center justify-center object-cover text-xs font-bold text-white bg-blue-700 rounded-full w-7 h-7">
							{name[0]}
						</div>
						<p className="text-sm text-white">{name}</p>
					</div>
					<button
						type="button"
						onClick={() => downloadImage(_id, photo)}
						className="bg-transparent border-none outline-none"
					>
						<AiOutlineDownload className="p-1 text-2xl bg-blue-300 rounded-full" />
					</button>
				</div>
			</div>
		</article>
	);
}

export default Card;

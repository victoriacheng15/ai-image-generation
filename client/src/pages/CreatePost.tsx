import { VscPreview } from "react-icons/vsc";
import { useCreatePost } from "../hooks/useCreatePost";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

function CreatePost() {
	const {
		form,
		generatingImg,
		loading,
		handleChange,
		handleSubmit,
		handleSurpriseMe,
		generateImage,
	} = useCreatePost();

	const { name, prompt, photo } = form;

	const title = <h1 className="text-3xl font-extrabold">Create</h1>;
	const paragraph = (
		<p className="mt-2 text-base">
			Create imaginative and visually stunning images through by DALLE-E AI and
			share them with the community
		</p>
	);

	const generatingImage = generatingImg && (
		<div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg">
			<Loader />
		</div>
	);

	return (
		<section>
			{title}
			{paragraph}
			<form className="mt-16" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						label="Your Name"
						type="text"
						name="name"
						placeholder="Ex., john doe"
						value={name}
						handleChange={handleChange}
						required={true}
					/>

					<FormField
						label="Prompt"
						type="text"
						name="prompt"
						placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
						value={prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
						required={true}
					/>

					<div className="relative flex items-center justify-center w-64 h-64 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
						{photo ? (
							<img
								src={photo}
								alt={prompt}
								className="object-contain w-full h-full"
							/>
						) : (
							<VscPreview className="w-full h-full opacity-50" />
						)}

						{generatingImage}
					</div>
				</div>

				<div className="flex gap-5 mt-5">
					<button
						type="button"
						onClick={generateImage}
						className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{generatingImg ? "Generating..." : "Generate"}
					</button>
				</div>

				<div className="mt-10">
					<p className="mt-2 text-[#666e75] text-[14px]">
						** Once you have created the image you want, you can share it with
						others in the community **
					</p>
					<button
						type="submit"
						className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{loading ? "Sharing..." : "Share with the Community"}
					</button>
				</div>
			</form>
		</section>
	);
}

export default CreatePost;

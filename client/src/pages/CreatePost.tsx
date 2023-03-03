import { VscPreview } from "react-icons/vsc";
import { useCreatePost } from "../hooks/useCreatePost";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import GenerateButton from "../components/GenerateButton";

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

	const title = <h2 className="text-2xl md:text-3xl font-extrabold">Create</h2>;
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
		<>
			{title}
			{paragraph}
			<form className="mt-16" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						label="Your Name"
						type="text"
						name="name"
						placeholder="Jane Doe"
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
						handleSurpriseMe={handleSurpriseMe}
						isSurpriseMe
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
					<GenerateButton
						hasPrompt={prompt}
						btnText="Generate"
						onClick={generateImage}
					/>
				</div>

				<div className="mt-10">
					<p className="my-2 text-gray-500 text-sm">
						** Once you have created the image you want, you can share it with
						others in the community **
					</p>
					<button
						type="submit"
						className="text-slate-100 bg-blue-900 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{loading ? "Sharing..." : "Share with the Community"}
					</button>
				</div>
			</form>
		</>
	);
}

export default CreatePost;

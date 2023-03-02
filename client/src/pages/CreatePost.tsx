import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

function CreatePost() {
	const navigate = useNavigate();
	const formValues = {
		name: "",
		prompt: "",
		photo: "",
	};
	const [form, setForm] = useState(formValues);
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);
	const BACKEND = import.meta.env.VITE_BACKEND;
	const API_PATH = "/api/v1";
	const headers = {
		"Content-Type": "application/json",
	};

	async function generateImage() {
		setGeneratingImg(true);
		if(form.prompt) {
			try {
				const response = await fetch(`${BACKEND}${API_PATH}/dalle`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ prompt: form.prompt }),
				});
	
				const data = await response.json();
				setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
			} catch (err) {
				alert(err);
			} finally {
				setGeneratingImg(false);
			}
		} else {
			alert("Please enter a prompt");
		}
	}

	async function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();

		if (form.photo) {
			setLoading(true);
			try {
				const res = await fetch(`${BACKEND}${API_PATH}/posts`, {
					method: "POST",
					headers,
					body: JSON.stringify({ ...form }),
				});

				await res.json();
				navigate("/");
			} catch (error) {
				alert(error);
			} finally {
				setLoading(false);
			}
		} else {
			alert("Please enter a prompt and a photo");
		}
	}

	function handleChange(e: { target: { name: string; value: string } }) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSurpriseMe() {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	}

	return (
		<section>
			<h1 className="text-3xl font-extrabold">Create</h1>
			<p className="mt-2 text-base">
				Create imaginative and visually stunning images through by DALLE-E AI
				and share them with the community
			</p>
			<form className="mt-16" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						label="Your Name"
						type="text"
						name="name"
						placeholder="Ex., john doe"
						value={form.name}
						handleChange={handleChange}
						required={true}
					/>

					<FormField
						label="Prompt"
						type="text"
						name="prompt"
						placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
						required={true}
					/>

					<div className="relative flex items-center justify-center w-64 h-64 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className="object-contain w-full h-full"
							/>
						) : (
							<VscPreview className="opacity-50" size="2x" />
						)}

						{generatingImg && (
							<div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
								<Loader />
							</div>
						)}
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

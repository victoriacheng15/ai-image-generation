import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND, API_PATH, headers, getRandomPrompt } from "../utils";

export function useCreatePost() {
	const navigate = useNavigate();
	const formValues = {
		name: "",
		prompt: "",
		photo: "",
	};
	const [form, setForm] = useState(formValues);
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const FULL_URL = `${BACKEND}${API_PATH}`;

	async function generateImage() {
		setGeneratingImg(true);
		try {
			const response = await fetch(`${FULL_URL}/dalle`, {
				method: "POST",
				headers,
				body: JSON.stringify({ prompt: form.prompt }),
			});

			const data = await response.json();
			setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
		} catch (err) {
			alert(err);
		} finally {
			setGeneratingImg(false);
		}
	}

	async function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();

		if (form.photo) {
			setLoading(true);
			try {
				const res = await fetch(`${FULL_URL}/posts`, {
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
			alert("Please make sure there is a photo");
		}
	}

	function handleChange(e: { target: { name: string; value: string } }) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	}

	function handleSurpriseMe() {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	}

	return {
		form,
		generatingImg,
		loading,
		handleChange,
		handleSubmit,
		handleSurpriseMe,
		generateImage,
	};
}

import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export const BACKEND = import.meta.env.VITE_BACKEND;
export const API_PATH = "/api/v1";
export const headers = {
	"Content-Type": "application/json",
};

export function getRandomPrompt(prompt: string): string {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];

	if (randomPrompt === prompt) {
		return getRandomPrompt(prompt);
	}

	return randomPrompt;
}

export async function downloadImage(_id: string, photo: string | Blob) {
	FileSaver.saveAs(photo, `${_id}.jpg`);
}

import { useState, useEffect } from "react";
import { BACKEND, API_PATH } from "../utils";

export function useHome() {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState<PostResponse[]>([]);
	const [searchText, setSearchText] = useState("");
	const [searchTimeout, setSearchTimeout] = useState(0);
	const [searchedResults, setSearchedResults] = useState<PostResponse[]>([]);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${BACKEND}${API_PATH}/posts`);
			if (res.ok) {
				const results = await res.json();
				setAllPosts(results.data);
			}
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const handleSearchChange = (e: { target: { value: string } }) => {
		const text = e.target.value.toLowerCase();
		clearTimeout(searchTimeout);
		setSearchText(text);

		setSearchTimeout(
			setTimeout(() => {
				const searchedResults = allPosts.filter((item) =>
					item.prompt.toLowerCase().includes(text),
				);
				setSearchedResults(searchedResults);
			}, 500),
		);
	};

	return {
		loading,
		allPosts,
		searchText,
		searchedResults,
		handleSearchChange,
	};
}

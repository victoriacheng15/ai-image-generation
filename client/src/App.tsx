import { Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";
import logo from "./assets/logo.svg";

function App() {
	return (
		<>
			<header className="bg-blue-200 py-4">
				<div className="w-11/12 mx-auto flex justify-between items-center">
					<Link to="/">
						<img src={logo} alt="logo" className="w-28 object-contain" />
					</Link>

					<Link
						to="/create-post"
						className="font-inter font-medium bg-blue-900 text-slate-100 px-4 py-2 rounded-md"
					>
						Create
					</Link>
				</div>
			</header>
			<main className="min-h-[calc(100vh-72px)] py-8">
				<div className="w-11/12 mx-auto">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-post" element={<CreatePost />} />
					</Routes>
				</div>
			</main>
		</>
	);
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";
import logo from "./assets/logo.svg";

function App() {
	return (
		<>
			<header className="py-4 bg-blue-200">
				<nav className="flex items-center justify-between w-11/12 mx-auto max-w-7xl">
					<Link to="/">
						<img src={logo} alt="logo" className="object-contain w-28" />
					</Link>

					<Link
						to="/create-post"
						className="px-4 py-2 font-medium bg-blue-900 rounded-md font-inter text-slate-100"
					>
						Create
					</Link>
				</nav>
			</header>
			<main className="min-h-[calc(100vh-72px)] py-8 w-11/12 mx-auto max-w-7xl">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-post" element={<CreatePost />} />
				</Routes>
			</main>
		</>
	);
}

export default App;

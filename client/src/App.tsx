import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<header className="py-4 bg-blue-200">
				<Navbar />
			</header>
			<main className="w-11/12 py-8 mx-auto max-w-7xl">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-post" element={<CreatePost />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

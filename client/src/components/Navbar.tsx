import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
	return (
		<nav className="flex items-center justify-between w-11/12 mx-auto max-w-7xl">
			<Link to="/">
				<img src={logo} alt="logo" className="object-contain w-28" />
			</Link>

			<Link
				to="/create-post"
				className="px-4 py-2 font-medium duration-300 ease-in-out bg-blue-900 rounded-md font-inter text-slate-100 hover:bg-blue-800"
			>
				Create
			</Link>
		</nav>
	);
}

export default Navbar;

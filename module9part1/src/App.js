import "./App.css";
import Home from "./Home";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

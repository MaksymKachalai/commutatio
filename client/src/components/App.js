import { Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";
import HomePage from "./HomePage/HomePage";
import EnterRoom from "./EnterRoom/EnterRoom";
import PersonalRoom from "./PersonalRoom/PersonalRoom";

const socket = socketIO.connect("http://localhost:3001");

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="personalroom"
					element={<PersonalRoom />}
				/>
				<Route
					path="enter"
					element={<EnterRoom />}
				/>
			</Routes>
		</div>
	);
}

export default App;

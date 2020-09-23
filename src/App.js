import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

const initialState = {
	message: "test message",
};

function App() {
	const [state, dispatch] = React.useReducer((state, action) => {
		switch (action.type) {
			default:
				return state;
		}
	}, initialState);

	return <Canvas />;
}

export default App;

import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import c from "./utils/constants";
import { getCanvasPosition } from "./utils/formulas";
import moveObjects from "./reducers/moveObjects";

const initialState = {
	angle: 45,
};

function App() {
	const [state, dispatch] = React.useReducer((state, action) => {
		switch (action.type) {
			case c.actions.MOVE_OBJECTS:
				return moveObjects(state, action.mousePosition);
			default:
				return state;
		}
	}, initialState);

	const [canvasMousePosition, setCanvasMousePosition] = React.useState({
		x: 0,
		y: 0,
	});

	React.useEffect(() => {
		const interval = setInterval(() => {
			dispatch({
				type: c.actions.MOVE_OBJECTS,
				mousePosition: canvasMousePosition,
			});
		}, 10);
		return () => clearInterval(interval);
	}, [canvasMousePosition]);

	function trackMouse(event) {
		setCanvasMousePosition(getCanvasPosition(event));
	}

	return <Canvas angle={state.angle} trackMouse={trackMouse} />;
}

export default App;

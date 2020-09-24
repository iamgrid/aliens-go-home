import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import c from "./utils/constants";
import { getCanvasPosition } from "./utils/formulas";
import useAnimationFrame from "./hooks/useAnimationFrame";
import moveObjects from "./reducers/moveObjects";
import shoot from "./reducers/shoot";

const initialState = {
	angle: 45,
	gameState: {
		started: false,
		kills: 0,
		lives: 3,
		flyingObjects: [],
		lastObjectCreatedAt: new Date().getTime(),
		cannonBalls: [],
	},
};

function App() {
	const [state, dispatch] = React.useReducer((state, action) => {
		switch (action.type) {
			case c.actions.MOVE_OBJECTS:
				return moveObjects(state, action.mousePosition);
			case c.actions.START_GAME:
				return {
					...state,
					gameState: { ...initialState.gameState, started: true },
				};
			case c.actions.SHOOT:
				return shoot(state, action.mousePosition);
			default:
				return state;
		}
	}, initialState);

	const [canvasMousePosition, setCanvasMousePosition] = React.useState({
		x: 0,
		y: 0,
	});

	useAnimationFrame(() => {
		dispatch({
			type: c.actions.MOVE_OBJECTS,
			mousePosition: canvasMousePosition,
		});
	}, [canvasMousePosition]);

	function trackMouse(event) {
		setCanvasMousePosition(getCanvasPosition(event));
	}

	function startGame() {
		dispatch({ type: c.actions.START_GAME });
	}

	function doShoot() {
		if (state.gameState.started) {
			console.log("boom");
			dispatch({ type: c.actions.SHOOT, mousePosition: canvasMousePosition });
		}
	}

	return (
		<Canvas
			angle={state.angle}
			gameState={state.gameState}
			startGame={startGame}
			trackMouse={trackMouse}
			doShoot={doShoot}
		/>
	);
}

export default App;

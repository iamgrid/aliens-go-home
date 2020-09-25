import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./CannonBall";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import Heart from "./Heart";
import StartGame from "./StartGame";
import Title from "./Title";
import c from "../utils/constants";
import { getCanvasPosition } from "../utils/formulas";
import useAnimationFrame from "../hooks/useAnimationFrame";
import moveObjects from "../reducers/moveObjects";
import shoot from "../reducers/shoot";

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

document.documentElement.style.setProperty(`--gameHeight`, `${c.gameHeight}px`);

export default function Canvas() {
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
		if (state.gameState.started)
			dispatch({ type: c.actions.SHOOT, mousePosition: canvasMousePosition });
	}

	const [windowWidth, windowHeight] = useWindowSize();
	const viewBox = [
		window.innerWidth / -2,
		100 - c.gameHeight,
		window.innerWidth,
		c.gameHeight,
	];
	const canvasStyle = {
		width: `${windowWidth}px`,
		height: `${windowHeight}px`,
	};

	const lives = [];

	for (let i = 0; i < state.gameState.lives; i++) {
		const heartPosition = {
			x: -180 - i * 70,
			y: 35,
		};
		lives.push(<Heart key={i} position={heartPosition} />);
	}

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
			style={canvasStyle}
			onMouseMove={trackMouse}
			onClick={doShoot}
		>
			<defs>
				<filter id="shadow">
					<feDropShadow dx="1" dy="1" stdDeviation="2" />
				</filter>
			</defs>
			<Sky />
			{state.gameState.started && (
				<g>
					{state.gameState.flyingObjects.map((flyingObject) => (
						<FlyingObject
							key={flyingObject.id}
							position={flyingObject.position}
						/>
					))}
				</g>
			)}
			<Ground />
			{state.gameState.started
				? state.gameState.cannonBalls.map((cannonBall) => (
						<CannonBall key={cannonBall.id} position={cannonBall.position} />
				  ))
				: null}
			<CannonPipe rotation={state.angle} />
			<CannonBase />
			<CurrentScore score={state.gameState.kills} />
			{!state.gameState.started && (
				<g>
					<StartGame onClick={() => startGame()} />
					<Title />
				</g>
			)}
			{lives}
		</svg>
	);
}

import { calculateAngle } from "../utils/formulas";

export default function shoot(state, mousePosition) {
	if (!state.gameState.started) return state;

	const { cannonBalls } = state.gameState;

	if (cannonBalls.length === 2) return state;

	const { x, y } = mousePosition;

	const angle = calculateAngle(0, 0, x, y);

	const id = new Date().getTime();
	const cannonBall = {
		position: { x: 0, y: 0 },
		angle,
		id,
	};

	return {
		...state,
		gameState: {
			...state.gameState,
			cannonBalls: [...cannonBalls, cannonBall],
		},
	};
}

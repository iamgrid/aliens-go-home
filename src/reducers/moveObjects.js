import createFlyingObjects from "../hooks/createFlyingObjects";
import { calculateAngle } from "../utils/formulas";

export default function moveObjects(state, mousePosition) {
	const mousePositionProper = mousePosition || { x: 0, y: 0 };
	if (!mousePosition) return state;
	const { x, y } = mousePositionProper;
	const angle = calculateAngle(0, 0, x, y);

	const newState = createFlyingObjects(state);

	const now = new Date().getTime();
	const flyingObjects = newState.gameState.flyingObjects.filter(
		(object) => now - object.createdAt < 4000
	);

	// console.log(angle, mousePosition.x, mousePosition.y);

	return {
		...newState,
		angle,
		gameState: {
			...newState.gameState,
			flyingObjects,
		},
	};
}

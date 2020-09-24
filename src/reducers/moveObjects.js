import createFlyingObjects from "../hooks/createFlyingObjects";
import { calculateAngle } from "../utils/formulas";

export default function moveObjects(state, mousePosition) {
	const mousePositionProper = mousePosition || { x: 0, y: 0 };
	if (!mousePosition) return state;
	const { x, y } = mousePositionProper;
	const angle = calculateAngle(0, 0, x, y);

	const newState = createFlyingObjects(state);

	// console.log(angle, mousePosition.x, mousePosition.y);

	return {
		...newState,
		angle,
	};
}

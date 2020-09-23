import { calculateAngle } from "../utils/formulas";

export default function moveObjects(state, mousePosition) {
	if (!mousePosition) return state;
	const { x, y } = mousePosition;
	const angle = calculateAngle(0, 0, x, y);

	// console.log(angle, mousePosition.x, mousePosition.y);

	return {
		...state,
		angle,
	};
}

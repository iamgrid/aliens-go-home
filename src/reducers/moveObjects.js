import createFlyingObjects from "./createFlyingObjects";
import moveCannonBalls from "./moveCannonBalls";
import checkCollisions from "./checkCollisions";
import { calculateAngle } from "../utils/formulas";

export default function moveObjects(state, mousePosition) {
	if (!state.gameState.started) return state;

	let cannonBalls = moveCannonBalls(state.gameState.cannonBalls);

	const mousePositionProper = mousePosition || { x: 0, y: 0 };
	const { x, y } = mousePositionProper;
	const angle = calculateAngle(0, 0, x, y);

	const newState = createFlyingObjects(state);

	const now = new Date().getTime();
	let flyingObjects = newState.gameState.flyingObjects.filter(
		(object) => now - object.createdAt < 4000
	);

	const objectsDestroyed = checkCollisions(cannonBalls, flyingObjects);
	const cannonBallsDestroyed = objectsDestroyed.map(
		(object) => object.cannonBallId
	);
	const flyingDiscsDestroyed = objectsDestroyed.map(
		(object) => object.flyingDiscId
	);

	cannonBalls = cannonBalls.filter((cannonBall) =>
		cannonBallsDestroyed.indexOf(cannonBall.id)
	);
	flyingObjects = flyingObjects.filter((flyingDisc) =>
		flyingDiscsDestroyed.indexOf(flyingDisc.id)
	);

	// console.log(angle, mousePosition.x, mousePosition.y);

	return {
		...newState,
		angle,
		gameState: {
			...newState.gameState,
			flyingObjects,
			cannonBalls,
		},
	};
}

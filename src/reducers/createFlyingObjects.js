import c from "../utils/constants";

export default function createFlyingObjects(state) {
	if (!state.gameState.started) return state; // game not running

	const now = new Date().getTime();
	const { lastObjectCreatedAt, flyingObjects } = state.gameState;
	const createNewObject =
		now - lastObjectCreatedAt > c.flyingObjectSettings.createInterval &&
		flyingObjects.length < c.flyingObjectSettings.maxFlyingObjects;

	if (!createNewObject) return state; // no need to create objects now

	const id = new Date().getTime();
	const predefinedPosition = Math.floor(
		Math.random() * c.flyingObjectSettings.maxFlyingObjects
	);
	const flyingObjectPosition =
		c.flyingObjectSettings.starterPositions[predefinedPosition];
	const newFlyingObject = {
		position: {
			x: flyingObjectPosition,
			y: c.flyingObjectSettings.starterYAxis,
		},
		createdAt: new Date().getTime(),
		id,
	};

	return {
		...state,
		gameState: {
			...state.gameState,
			flyingObjects: [...state.gameState.flyingObjects, newFlyingObject],
			lastObjectCreatedAt: new Date().getTime(),
		},
	};
}

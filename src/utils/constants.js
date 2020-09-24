const c = {
	actions: {
		MOVE_OBJECTS: "MOVE_OBJECTS",
		START_GAME: "START_GAME",
	},
	skyAndGroundWidth: 5000,
	gameWidth: 800,
	flyingObjectSettings: {
		createInterval: 1000,
		maxFlyingObjects: 4,
		starterYAxis: -1000,
		starterPositions: [-300, -150, 150, 300],
	},
};

export default c;

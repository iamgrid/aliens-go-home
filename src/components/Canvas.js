import React from "react";

export default function Canvas() {
	const viewBox = [
		window.innerWidth / -2,
		100 - window.innerHeight,
		window.innerWidth,
		window.innerHeight,
	];

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
		>
			<circle cx={0} cy={0} r={50} />
		</svg>
	);
}

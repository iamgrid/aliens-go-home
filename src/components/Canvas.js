import React from "react";
import PropTypes from "prop-types";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";

export default function Canvas({ angle, trackMouse }) {
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
			onMouseMove={trackMouse}
		>
			<Sky />
			<Ground />
			<CannonPipe rotation={angle} />
			<CannonBase />
		</svg>
	);
}

Canvas.propTypes = {
	angle: PropTypes.number.isRequired,
	trackMouse: PropTypes.func.isRequired,
};

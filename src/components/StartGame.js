import React from "react";
import PropTypes from "prop-types";
import c from "../utils/constants";

export default function StartGame({ onClick }) {
	const button = {
		x: c.gameWidth / -2, // half width
		y: -280, // minus means up (above 0)
		width: c.gameWidth,
		height: 200,
		rx: 10, // border radius
		ry: 10, // border radius
		style: {
			fill: "transparent",
			cursor: "pointer",
		},
		onClick: onClick,
	};

	const text = {
		textAnchor: "middle", // center
		x: 0, // center relative to X axis
		y: -150, // 150 up
		style: {
			fontFamily: "cursive",
			fontSize: 60,
			fill: "#e3e3e3",
			cursor: "pointer",
		},
		onClick: onClick,
	};
	return (
		<g filter="url(#shadow)">
			<rect {...button} />
			<text {...text}>Start a New Game</text>
		</g>
	);
}

StartGame.propTypes = {
	onClick: PropTypes.func.isRequired,
};

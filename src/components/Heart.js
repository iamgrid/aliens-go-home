import React from "react";
import PropTypes from "prop-types";
import { pathFromBezierCurve } from "../utils/formulas";

export default function Heart({ position }) {
	const heartStyle = {
		fill: "#da0d15",
		stroke: "#a51708",
		strokeWidth: "2px",
	};

	const leftSide = {
		initialAxis: {
			x: position.x,
			y: position.y,
		},
		initialControlPoint: {
			x: -20,
			y: -20,
		},
		endingControlPoint: {
			x: -40,
			y: 10,
		},
		endingAxis: {
			x: 0,
			y: 40,
		},
	};

	const rightSide = {
		initialAxis: {
			x: position.x,
			y: position.y,
		},
		initialControlPoint: {
			x: 20,
			y: -20,
		},
		endingControlPoint: {
			x: 40,
			y: 10,
		},
		endingAxis: {
			x: 0,
			y: 40,
		},
	};

	return (
		<g transform="scale(0.7), translate(-140, 18)" filter="url(#shadow)">
			<path style={heartStyle} d={pathFromBezierCurve(leftSide)} />
			<path style={heartStyle} d={pathFromBezierCurve(rightSide)} />
		</g>
	);
}

Heart.propTypes = {
	position: PropTypes.shape({
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
	}).isRequired,
};

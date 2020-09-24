import React from "react";
import PropTypes from "prop-types";

export default function FlyingObjectBase({ position }) {
	const style = {
		fill: "#979797",
		stroke: "#5c5c5c",
	};

	return (
		<ellipse cx={position.x} cy={position.y} rx="40" ry="10" style={style} />
	);
}

FlyingObjectBase.propTypes = {
	position: PropTypes.shape({
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
	}).isRequired,
};

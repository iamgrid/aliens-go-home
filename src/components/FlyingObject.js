import React from "react";
import PropTypes from "prop-types";
import FlyingObjectBase from "./FlyingObjectBase";
import FlyingObjectTop from "./FlyingObjectTop";

export default function FlyingObject({ position }) {
	return (
		<g className="flyingObjectContainer">
			<FlyingObjectBase position={position} />
			<FlyingObjectTop position={position} />
		</g>
	);
}

FlyingObject.propTypes = {
	position: PropTypes.shape({
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
	}).isRequired,
};

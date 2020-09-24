import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import FlyingObjectBase from "./FlyingObjectBase";
import FlyingObjectTop from "./FlyingObjectTop";
import c from "../utils/constants";

const moveVertically = keyframes`
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(${c.gameHeight}px);
	}
`;

const Move = styled.g`
	animation: ${moveVertically} 4s linear;
`;

export default function FlyingObject({ position }) {
	return (
		<Move>
			<FlyingObjectBase position={position} />
			<FlyingObjectTop position={position} />
		</Move>
	);
}

FlyingObject.propTypes = {
	position: PropTypes.shape({
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
	}).isRequired,
};

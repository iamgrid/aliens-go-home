import React from "react";
import PropTypes from "prop-types";

export default function CurrentScore({ score }) {
	const scoreStyle = {
		fontFamily: "cursive",
		fontSize: 40,
		fill: "#d6d33e",
	};

	return (
		<g filter="url(#shadow)">
			<text style={scoreStyle} x="200" y="66">
				{score}
			</text>
		</g>
	);
}

CurrentScore.propTypes = {
	score: PropTypes.number.isRequired,
};

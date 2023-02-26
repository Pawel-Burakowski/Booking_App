import React from "react"
import PropTypes from "prop-types"
import Hotel from "./Hotel/Hotel"
import "./Hotels.css"

const propTypes = {
	hotels: PropTypes.array.isRequired,
}

function Hotels(props) {
	const count = props.hotels.length
	return (
		<div className='container'>
			<h2 className='title'>Oferty ({ count })</h2>
			{props.hotels.map(hotel => (
				<Hotel onOpen={props.onOpen} key={hotel.id} {...hotel} theme={props.theme} />
			))}
		</div>
	)
}

Hotels.propTypes = propTypes

export default React.memo(Hotels)

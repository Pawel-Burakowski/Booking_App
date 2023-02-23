import React from "react"
import PropTypes from "prop-types"
import "./Hotel.css"
import hotelImg from "../../../assets/images/hotel1.jpg"

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
}

function Hotel(props) {
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='row hotel'>
					<div className='col-4'>
						<img
							className='img-fluid img-thumbnail hotelPicture'
							src={hotelImg}
							alt=''
						/>
					</div>

					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className='h5 mb-4'>{props.name}</p>
								<h5>
									<span className='badge badge bg-secondary'>{props.city}</span>
								</h5>
							</div>
							<div className='col'>
								<p className=''>
									Ocena użytkowników:
									<span className='badge bg-primary badge-ocena'>
										{props.rating}
									</span>
								</p>
								<a href='#' className={`btn btn-${props.theme} px-5`}>
									Pokaż
								</a>
							</div>
						</div>
					</div>

					<div className='col-12'>
						<p className='text-left mt-2 description mb-0'>
							{props.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

Hotel.propTypes = propTypes

export default Hotel

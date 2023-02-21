import React from "react"
import "./Hotel.css"
import hotelImg from "../../../assets/images/hotel1.jpg"

function Hotel() {
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
								<p className='h5 mb-4'>Willa Rauris by ALPS RESORTS</p>
								<h5>
									<span className='badge badge bg-secondary'>Rauris</span>
								</h5>
							</div>
							<div className='col'>
								<p className=''>
									Ocena użytkowników:
									<span class='badge bg-primary badge-ocena'>8.3</span>
								</p>
								<a href='#' className='btn btn-primary px-5'>
									Pokaż
								</a>
							</div>
						</div>
					</div>

					<div className='col-12'>
						<p className='text-left mt-2 description mb-0'>
							Obiekt Willa Rauris by ALPS RESORTS, położony w miejscowości
							Rauris, oferuje restaurację oraz centrum spa i odnowy biologicznej
							z krytym basenem, centrum fitness i sauną.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hotel

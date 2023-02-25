import { useEffect, useState } from "react"
import moment from "moment/moment"

const BestHotel = props => {
	const [time, setTime] = useState("")

	const hotel = props.getHotel()
	const endTime = moment().add(44, "minutes").add(17, "seconds")
	let interval = null

	useEffect(() => {
		interval = setInterval(() => {
			const leftTime = -moment().diff(endTime) / 1000
			const minut = Math.floor(leftTime / 60)
			const seconds = Math.floor(leftTime % 60)
			setTime(`minut: ${minut} sekund: ${seconds}`)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	if (!hotel) return null

	return (
		<div className='card container'>
			<div className='card-body'>
				<h6 className='card-header text-muted text-center'>
					Najlepsza oferta!
				</h6>

				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{hotel.name}</h5>
					<p className=''>Ocena: {hotel.rating}</p>
				</div>
				<p>Do końca oferty pozostało: {time} </p>
				<a href='#' className='btn btn-sm btn-light'>
					Pokaż
				</a>
			</div>
		</div>
	)
}

export default BestHotel

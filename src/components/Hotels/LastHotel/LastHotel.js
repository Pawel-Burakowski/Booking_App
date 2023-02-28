import { Link } from "react-router-dom"

function LastHotel(props) {

    const clickNoHandler = (e) => {

    }

	return (
		<div className='card bg-light container'>
			<div className='card-body'>
				<h6 className='mb-2 card-header text-muted text-center'>
					Ostatnio oglądałeś ten hotel. Wciąż zainteresownay?
				</h6>

				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{props.name}</h5>
					<span className='mb-5 badge badge bg-secondary'>{props.city}</span>
				</div>
				<div
                style={{width: "100px"}}
					className='ml-auto d-flex justify-content-between'>
					<Link to={`hotele/${props.id}`} className='btn btn-sm btn-dark'>
						Tak!
					</Link>
					<button onClick={props.onRemove} className='btn btn-sm btn-dark'>
						Nie
					</button>
				</div>
			</div>
		</div>
	)
}

export default LastHotel

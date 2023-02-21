import React from "react"
import "./Searchbar.css"
import { Button } from "reactstrap"

function Searchbar() {
	return (
		<div className='row-12'>
			<div className='d-flex justify-content-center'>
				<input
					className='inputSearch'
					type='text'
					placeholder=' Znajdź hotel...'
				/>
			</div>

			<div className="d-flex justify-content-center mt-2">
				<button type="button" class="btn btn-primary">Szukaj</button>
			</div>
		</div>
	)
}

export default Searchbar

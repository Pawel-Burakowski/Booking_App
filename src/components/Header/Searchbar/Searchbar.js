import React from "react"
import "./Searchbar.css"

function Searchbar() {
	return (
		<div className="search">
			<input className='inputSearch' type='text' placeholder=' Znajdź hotel...' />
			<button className="buttonSearch">Szukaj</button>
		</div>
	)
}

export default Searchbar

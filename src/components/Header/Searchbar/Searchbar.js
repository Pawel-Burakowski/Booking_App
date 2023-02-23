import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./Searchbar.css"

const propTypes = {
	onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
	const [value, setValue] = useState("")

	const updateValue = e => {
		setValue(e.target.value)
	}

	const search = () => {
		console.log("szukaj, sprawdzam tylko działanie", value)
		props.onSearch(value)
	}

	const onKeyDownHandler = e => {
		if (e.key === "Enter") {
			search()
		}
	}

	useEffect(() => {
		console.log("wykonam się raz, bo pusta tablica []");
		const input = document.querySelector('.search')
		console.log(input.focus());
	}, [] )

	return (
		<div className='row-12'>
			<div className='d-flex justify-content-center'>
				<input
					value={value}
					onChange={updateValue}
					onKeyDown={onKeyDownHandler} /* Podpięcie search() pod Enter */
					className='inputSearch search'
					type='text'
					placeholder=' Znajdź hotel...'
				/>
			</div>

			<div className='d-flex justify-content-center mt-2'>
				<button onClick={search} type='button' className={`btn btn-${props.theme}`}>
					Szukaj
				</button>
			</div>
		</div>
	)
}

Searchbar.propTypes = propTypes

export default Searchbar

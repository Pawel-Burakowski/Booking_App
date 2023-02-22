import React from "react"
import "./Header.css"
import Searchbar from "../Header/Searchbar/Searchbar"

function Header(props) {
	return (
		<header className='site-header'>
			<Searchbar onSearch={props.onSearch} />
		</header>
	)
}

export default Header

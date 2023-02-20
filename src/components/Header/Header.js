import React from "react"
import "./Header.css"
import Searchbar from "../Header/Searchbar/Searchbar"

function Header() {
	return (
		<header className='site-header'>
			<Searchbar />
		</header>
	)
}

export default Header

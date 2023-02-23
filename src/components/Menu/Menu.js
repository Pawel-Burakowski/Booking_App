import React from "react"
import { useContext } from "react"
import "./Menu.css"
import AuthContext from "../../context/authContext"

function Menu() {
	const auth = useContext(AuthContext)

	const login = e => {
		e.preventDefault()
		auth.login()
	}

	const logout = e => {
		e.preventDefault()
		auth.logout()
	}

	return (
		<div className='container menuContainer'>
			<ul className='menu'>
				<li className='menu-item'>
					<a href='#'>Home</a>
				</li>

				{auth.isAuthenticated ? (
					<li>
						<a href='#' onClick={logout}>
							Wyloguj
						</a>
					</li>
				) : (
					<li>
						<a href='#' onClick={login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Menu

import React from "react"
import "./Menu.css"
import useAuth from "../../components/Hooks/useAuth"
import { Link } from "react-router-dom"

function Menu() {
	const [auth, setAuth] = useAuth()

	const login = e => {
		e.preventDefault()
		setAuth(true)
	}

	const logout = e => {
		e.preventDefault()
		setAuth(false)
	}

	return (
		<div className='menuContainer'>
			<ul className='menu container'>
				<li className='menu-item'>
					<Link to="/">Home</Link>
				</li>

				{auth ? (
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

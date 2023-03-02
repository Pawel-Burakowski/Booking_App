import React from "react"
import style from "./Menu.css"
import useAuth from "../../components/Hooks/useAuth"
import { Link, NavLink } from "react-router-dom"

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
					<NavLink exact to="/" activeClassName={style.active}>
						Home
					</NavLink>
				</li>

				{auth ? (
					<>
						<li>
							<NavLink to="/profil" activeClassName={style.active}>
								Mój profil
							</NavLink>
						</li>

						<li>
							<a href='#' onClick={logout}>
								Wyloguj
							</a>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink activeClassName={style.active} to='/rejestracja'>
								Zarejestruj
							</NavLink>
						</li>
						<li>
							<a href='#' onClick={login}>
								Zaloguj
							</a>
						</li>
					</>
				)}

			</ul>
		</div>
	)
}

export default Menu

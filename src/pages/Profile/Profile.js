import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom"
import ProfilDetails from "../Profile/ProfilDetails/ProfilDetails"
import MyHotels from "../Profile/MyHotels/MyHotels"

export default function Profile(props) {
    const { path, url } = useRouteMatch()

	return (
		<div className='card container'>
			<div className='card-header'>
				<h2> Mój profil </h2>
			</div>
			<div className='card-body'>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<NavLink className='nav-link' exact to={`${url}`}>
							Profil
						</NavLink>
					</li>

					<li className='nav-item'>
						<NavLink className='nav-link' to={`${url}/hotele`}>
							Hotele
						</NavLink>
					</li>
				</ul>

				<div className='pt-4'>

					<Switch>
						<Route path={`${path}/hotele`}>
							<MyHotels />
						</Route>

                        <Route path={`${path}`}>
							<ProfilDetails />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}

import React, { useCallback, useEffect, useReducer, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Searchbar from "./components/Header/Searchbar/Searchbar"
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import Button from "./components/UI/Button/Button"
import AuthContext from "./context/authContext"
import ReducerContext from "./context/reducerContext"
import InspiringQuote from "./components/InspiringQuote/InspiringQuote"
import { reducer, initialState} from "./Reducer"
import Home from "./pages/Home/Home"
import Hotel from "./pages/Hotel/Hotel"
import Search from "./pages/Search/Search"
import Profile from "./pages/Profile/Profile"

function App() {
	/* const [theme, setTheme] = useState("primary") */
	const [state, dispatch] = useReducer(reducer, initialState)

	const changeTheme = () => {
		/* const newTheme = theme === "primary" ? "danger" : "primary" */
		/* this.setState({ theme: newTheme }) */
		/* setTheme(newTheme) */
		dispatch({ type: "change-theme" })
	}

	return (
		<Router>
			<AuthContext.Provider
				value={{
					isAuthenticated: state.isAuthenticated,
					login: () =>
						dispatch({ type: "login" }),
					logout: () =>
						dispatch({ type: "logout" }),
				}}>

				<ReducerContext.Provider value={{
					state: state,
					dispatch: dispatch
				}}>
					<Layout
						header={
							<Header>
								<InspiringQuote />
								<Searchbar theme={state.theme} />
								<Button onChange={changeTheme} />
							</Header>
						}
						menu={<Menu theme={state} />}
						content={
							<div>
								<Switch>
									<Route path="/hotele/:id">
										<Hotel />
									</Route>

									<Route path="/wyszukaj/:value">
										<Search />
									</Route>
									
									<Route path="/profil">
										<Profile />
									</Route>

									<Route exact={true} path="/">
										<Home />
									</Route>
								</Switch>
							</div>
						}
						footer={<Footer theme={state.theme} />}
					/>
				</ReducerContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App

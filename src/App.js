import React, { useCallback, useEffect, useReducer, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
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

const backendtHotels = [
	{
		id: 1,
		name: "Willa Rauris by ALPS RESORTS",
		city: "Rauris",
		rating: 8.4,
		description:
			"Obiekt Willa Rauris by ALPS RESORTS, położony w miejscowości Rauris, oferuje restaurację oraz centrum spa i odnowy biologicznej z krytym basenem, centrum fitness i sauną.",
		image: "",
	},
	{
		id: 2,
		name: "Wallackhaus Hotels",
		city: "Unterhauer",
		rating: 9.0,
		description:
			"Obiekt Wallackhaus Hotels położony jest na wysokości 2114 metrów nad poziomem morza w Parku Narodowym Wysokich Taurów, obok stoku narciarskiego Grossglockner/Heiligenblut.",
		image: "",
	},
]

function App() {
	/* const [theme, setTheme] = useState("primary") */
	const [state, dispatch] = useReducer(reducer, initialState)

	const changeTheme = () => {
		/* const newTheme = theme === "primary" ? "danger" : "primary" */
		/* this.setState({ theme: newTheme }) */
		/* setTheme(newTheme) */
		dispatch({ type: "change-theme" })
	}

	const searchHandler = value => {
		console.log("szukaj z app", value)
		const newHotels = [...backendtHotels].filter(x =>
			x.name.toLowerCase().includes(value.toLowerCase())
		)
		/* setHotels(newHotels) */
		dispatch({ type: "set-hotels", hotels: newHotels })
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
								<Searchbar onSearch={value => searchHandler(value)} theme={state.theme} />
								<Button onChange={changeTheme} />
							</Header>
						}
						menu={<Menu theme={state} />}
						content={
							<div>
								<Route exact={true} path="/">
									<Home />
								</Route>
	
								<Route path="/hotel/:id">
									<h1> To jest jakiś hotel </h1>
								</Route>
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

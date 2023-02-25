import React, { useCallback, useEffect, useReducer, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Hotels from "./components/Hotels/Hotels"
import LoadingIcon from "./components/UI/LoadingIcon"
import Searchbar from "./components/Header/Searchbar/Searchbar"
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import Button from "./components/UI/Button/Button"
import BestHotel from "./components/Hotels/BestHotel/BestHotel"
import InspiringQuote from "./components/InspiringQuote/InspiringQuote"
import AuthContext from "./context/authContext"

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

const reducer = (state, action) => {
	switch (action.type) {
		case "change-theme":
			return {
				...state, 
				theme: state.theme === "danger" ? "primary" : "danger"
			}

		case "set-hotels":
			return {
				...state, hotels: action.hotels 
			}

		case "set-loading":
			return {
					...state, loading: action.loading 
			}
		case "login":
			return {
					...state, isAuthenticated: true
				}
		case "logout":
			return {
					...state, isAuthenticated: false
				}
		default:
			return state
	}
}

const initialState = {
	hotels: [],
	loading: true,
	isAuthenticated: false,
	theme: "primary",
}

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

	const getBestHotel = useCallback (() => {
		if (state.hotels.length < 2) {
			return null
		}
		else {
			return state.hotels.sort
			((a, b) => a.rating > b.rating ? -1 : 1)
			[0]
		}
	}, [state.hotels])

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "set-hotels", hotels: backendtHotels })
			dispatch({ type: "set-loading", loading: false })
		}, 1000)
		console.log("Komponent zamontowano")
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				login: () =>
					dispatch({ type: "login" }),
				logout: () =>
					dispatch({ type: "logout" }),
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
					state.loading
					? <LoadingIcon /> 
					:
					<div>
						<BestHotel getHotel={getBestHotel}/>
						<Hotels hotels={state.hotels} theme={state.theme} />
					</div>
				}
				footer={<Footer theme={state.theme} />}
			/>
		</AuthContext.Provider>
	)
}

export default App

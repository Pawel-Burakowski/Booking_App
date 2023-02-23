import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Hotels from "./components/Hotels/Hotels"
import LoadingIcon from "./components/UI/LoadingIcon"
import Searchbar from "./components/Header/Searchbar/Searchbar"
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import Button from "./components/UI/Button/Button"
import AuthContext from "./context/authContext"

class App extends Component {
	hotels = [
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

	state = {
		hotels: [],
		loading: true,
		theme: "primary",
		isAuthenticated: true
	}

	searchHandler(value) {
		console.log("szukaj z app", value)
		const hotels = [...this.hotels].filter(x =>
			x.name.toLowerCase().includes(value.toLowerCase())
		)
		this.setState({ hotels })
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hotels: this.hotels,
				loading: false,
			})
		}, 1000)
		console.log("Komponent zamontowano")
	}

	componentDidUpdate() {
		console.log("komponent zaktualizownay")
	}

	changeTheme = () => {
		const newTheme = this.state.theme === "primary" ? "danger" : "primary"
		this.setState({ theme: newTheme })
	}

	render() {
		return (
			<div className='App'>
				<AuthContext.Provider value={{isAuthenticated: this.state.isAuthenticated,
				login: () => this.setState({ isAuthenticated: true }),
				logout: () => this.setState({ isAuthenticated: false }),
				}}>
					<Layout
						header={
							<Header>
								<Searchbar
									onSearch={value => this.searchHandler(value)}
									theme={this.state.theme}
								/>
								<Button onChange={this.changeTheme} />
							</Header>
						}
						menu={<Menu theme={this.state.theme} />}
						content={
							this.state.loading ? (
								<LoadingIcon />
							) : (
								<Hotels hotels={this.state.hotels} theme={this.state.theme} />
							)
						}
						footer={<Footer theme={this.state.theme} />}
					/>
				</AuthContext.Provider>
			</div>
		)
	}
}

export default App

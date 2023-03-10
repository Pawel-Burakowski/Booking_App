import React, { useReducer, lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
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
import NotFound from "./pages/404/404"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Login/Register/Register"
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute"
import ErrorBoundry from "./components/hoc/ErrorBoundry"
import AddHotel from "./pages/Profile/MyHotels/AddHotel/AddHotel"
const Profile = lazy(() => import ("./pages/Profile/Profile")) 

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
					<ErrorBoundry>
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
									<Suspense fallback={<p>??adowanie...</p>}>
										<Switch>
											<AuthenticatedRoute path="/profil/hotele/dodaj">
												<AddHotel />
											</AuthenticatedRoute>
											
											<AuthenticatedRoute path="/profil">
												<Profile />
											</AuthenticatedRoute>
		
											<Route path="/hotele/:id">
												<Hotel />
											</Route>

											<Route path="/wyszukaj/:value?">
												<Search />
											</Route>
											
											<Route path="/zaloguj">
												<Login />
											</Route>

											<Route path="/rejestracja">
												<Register />
											</Route>
		
											<Route exact={true} path="/">
												<Home />
											</Route>
		
											<Route>
												<NotFound />
											</Route>
										</Switch>
									</Suspense>
								</div>
							}
							footer={<Footer theme={state.theme} />}
						/>
					</ErrorBoundry>
				</ReducerContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App

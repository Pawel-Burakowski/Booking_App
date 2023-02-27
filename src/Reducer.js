 export const reducer = (state, action) => {
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

export const initialState = {
	hotels: [],
	loading: true,
	isAuthenticated: true,
	theme: "primary",
}
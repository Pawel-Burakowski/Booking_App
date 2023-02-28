export const reducer = (state, action) => {
	switch (action.type) {
		case "change-theme":
			return {
				...state, 
				theme: state.theme === "danger" ? "primary" : "danger"
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
	isAuthenticated: true,
	theme: "primary",
}
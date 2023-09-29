import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

const initilalState = {
	isLoggedin: false,
	user: null,
};

export function AuthProvider({ children }) {
	const [user, dispatch] = useReducer(authReducer, initilalState);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			console.log(storedUser);
			dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
		}
	}, []);

	return (
		<AuthContext.Provider value={user}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}

export function useAuthDispatch() {
	return useContext(AuthDispatchContext);
}

function authReducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			localStorage.setItem("user", JSON.stringify(action.payload));
			return {
				...state,
				isLoggedin: true,
				user: action.payload,
			};
		case "LOGOUT":
			localStorage.removeItem("user");
			return {
				...state,
				isLoggedin: false,
				user: null,
			};
		default:
			return state;
	}
}

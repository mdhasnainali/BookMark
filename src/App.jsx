import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import { useAuth } from "./context/AuthContext";
import DashboardManager from "./pages/DashboardManager";


const App = () => {
	const user = useAuth();
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={
							user.isLoggedin ? <Navigate replace to={"/"} /> : <LoginPage />
						}
					/>
					<Route
						path="/signup"
						element={
							user.isLoggedin ? <Navigate replace to={"/"} /> : <SignUpPage />
						}
					/>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/book/:book_id/" element={<BookPage />} />
					<Route
						path="/dashboard"
						element={<DashboardManager/>}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

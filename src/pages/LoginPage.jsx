import { Link, useNavigate } from "react-router-dom";
import COVER_IMAGE from "../assets/images/loginSide.png";
import { useState } from "react";
import { useAuthDispatch } from "../context/AuthContext.jsx";

const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useAuthDispatch();

	let [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const onInputChangeHandler = (property, value) => {
		setLoginData((prevObject) => ({ ...prevObject, [property]: value }));
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		login();
	};

	const login = async () => {
		const url = "http://146.190.160.22:8080/api/v1/auth/login";
		// "http://localhost:8080/api/v1/books/category";

		fetch(url, {
			// mode: "no-cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				if (data.status != "Failed") {
					dispatch({ type: "LOGIN", payload: data });
					navigate("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="w-full h-screen flex items-start">
			<div className="relative w-1/2 h-full flex flex-col">
				<img
					src={COVER_IMAGE}
					alt="Cover Image"
					className="w-full h-full object-fill	"
				/>
			</div>
			<div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between">
				<h1 className="text-xl text-[#f5f5f5f] font-semibold">BookMark</h1>

				<form className="w-full flex flex-col max-w-[500px]">
					<div className="w-full flex flex-col mb-2">
						<h1 className="text-3xl font-semibold mb-4">Login</h1>
						<p className="text-sm mb-2">
							Welcome Back! Please enter your details.
						</p>
					</div>

					<div className="w-full flex flex-col">
						<input
							type="email"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Email"
							name="email"
							value={loginData.email}
							onChange={(e) => {
								onInputChangeHandler("email", e.target.value);
							}}
							required
						/>
						<input
							type="password"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Password"
							name="password"
							value={loginData.password}
							onChange={(e) => {
								onInputChangeHandler("password", e.target.value);
							}}
							required
						/>
					</div>

					<div className="w-full flex items-center justify-between">
						<dir className="w-1/2 flex items-center">
							<input type="checkbox" className="w-4 h-4 mr-2" />
							<p className="text-sm font-medium">Remember Me</p>
						</dir>

						<div className="w-1/2 flex items-center">
							<p className="w-full text-center text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
								Forgot Password?
							</p>
						</div>
					</div>

					<div className="w-full flex flex-col">
						<button
							type="submit"
							className="w-full bg-[#060606] font-semibold rounded-md p-4 text-center flex items-start justify-center text-white"
							onClick={formSubmitHandler}
						>
							Log In
						</button>
						<Link
							to="/signup"
							className="w-full bg-white font-semibold border-2 border-black rounded-md my-2 p-4 text-center flex items-start justify-center text-black"
						>
							Sign Up
						</Link>
					</div>
				</form>

				<div className="w-full flex items-center justify-center max-w-[500px]">
					<p className="text-sm font-normal text-[#060606]">
						Dont have a account?{" "}
						<span className="font-semibold underline underline-offset-2 cursor-pointer">
							<Link to="/signup">Sign up for free</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

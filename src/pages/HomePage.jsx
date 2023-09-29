import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";


const HomePage = () => {
	let user = useAuth();
	console.log(user);
	return (
		<div>
			<Header />
			<Body token={user.isLoggedin ? user.user.role : ""}/>
			<Footer />
			{user.isLoggedin ? <p> Logedin: {user.user.role}</p>: <p>not loged in</p>}
		</div>
	);
};

export default HomePage;

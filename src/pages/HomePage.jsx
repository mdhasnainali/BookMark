import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";


const HomePage = () => {
	let user = useAuth();
	// console.log(user);
	return (
		<div>
			<Header />
			<Body token={user.isLoggedin ? user.user?.role : ""}/>
			<Footer />
		</div>
	);
};

export default HomePage;

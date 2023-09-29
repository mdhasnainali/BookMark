import { Link } from "react-router-dom";
import COVER_IMAGE from "../assets/images/loginSide.png";
import {useState } from "react";
import { useAuthDispatch } from "../context/AuthContext.jsx";

const SignUpPage = () => {
	const dispatch = useAuthDispatch();

	const [signupInfo, setsignupInfo] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		area: "",
		upazila: "",
		district: "",
	});

	const onInputChangeHandler = (property, value) => {
		setsignupInfo((prevObject) => ({ ...prevObject, [property]: value }));
	};

	
	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(signupInfo);
		signup();
	}


	const signup = () => {
		const url = "http://146.190.160.22:8080/api/v1/auth/register";

		fetch(url, {
			// mode: "no-cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(signupInfo),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.status != "Failed") {
					console.log(data);
					dispatch({ type: "LOGIN", payload: data });
					navigate("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const division = [
		"Dhaka",
		"Faridpur",
		"Gazipur",
		"Gopalganj",
		"Jamalpur",
		"Kishoreganj",
		"Madaripur",
		"Manikganj",
		"Munshiganj",
		"Mymensingh",
		"Narayanganj",
		"Narsingdi",
		"Netrokona",
		"Rajbari",
		"Shariatpur",
		"Sherpur",
		"Tangail",
		"Bogra",
		"Joypurhat",
		"Naogaon",
		"Natore",
		"Nawabganj",
		"Pabna",
		"Rajshahi",
		"Sirajgonj",
		"Dinajpur",
		"Gaibandha",
		"Kurigram",
		"Lalmonirhat",
		"Nilphamari",
		"Panchagarh",
		"Rangpur",
		"Thakurgaon",
		"Barguna",
		"Barisal",
		"Bhola",
		"Jhalokati",
		"Patuakhali",
		"Pirojpur",
		"Bandarban",
		"Brahmanbaria",
		"Chandpur",
		"Chittagong",
		"Comilla",
		"Cox's Bazar",
		"Feni",
		"Khagrachari",
		"Lakshmipur",
		"Noakhali",
		"Rangamati",
		"Habiganj",
		"Maulvibazar",
		"Sunamganj",
		"Sylhet",
		"Bagerhat",
		"Chuadanga",
		"Jessore",
		"Jhenaidah",
		"Khulna",
		"Kushtia",
		"Magura",
		"Meherpur",
		"Narail",
		"Satkhira",
	];

	const upazilas = [
		"Debidwar",
		"Barura",
		"Brahmanpara",
		"Chandina",
		"Chauddagram",
		"Daudkandi",
		"Homna",
		"Laksam",
		"Muradnagar",
		"Nangalkot",
		"Comilla Sadar",
		"Meghna",
		"Monohargonj",
		"Sadarsouth",
		"Titas",
		"Burichang",
		"Lalmai",
		"Chhagalnaiya",
		"Feni Sadar",
		"Sonagazi",
		"Fulgazi",
		"Parshuram",
		"Daganbhuiyan",
		"Brahmanbaria Sadar",
		"Kasba",
		"Nasirnagar",
		"Sarail",
		"Ashuganj",
		"Akhaura",
		"Nabinagar",
		"Bancharampur",
		"Bijoynagar",
		"Rangamati Sadar",
		"Kaptai",
		"Kawkhali",
		"Baghaichari",
		"Barkal",
		"Langadu",
		"Rajasthali",
		"Belaichari",
		"Juraichari",
		"Naniarchar",
		"Noakhali Sadar",
		"Companiganj",
		"Begumganj",
		"Hatia",
		"Subarnachar",
		"Kabirhat",
		"Senbug",
		"Chatkhil",
		"Sonaimori",
		"Haimchar",
		"Kachua",
		"Shahrasti",
		"Chandpur Sadar",
		"Matlab South",
		"Hajiganj",
		"Matlab North",
		"Faridgonj",
		"Lakshmipur Sadar",
		"Kamalnagar",
		"Raipur",
		"Ramgati",
		"Ramganj",
		"Rangunia",
		"Sitakunda",
		"Mirsharai",
		"Patiya",
		"Sandwip",
		"Banshkhali",
		"Boalkhali",
		"Anwara",
		"Chandanaish",
		"Satkania",
		"Lohagara",
		"Hathazari",
		"Fatikchhari",
		"Raozan",
		"Karnafuli",
		"Coxsbazar Sadar",
		"Chakaria",
		"Kutubdia",
		"Ukhiya",
		"Moheshkhali",
		"Pekua",
		"Ramu",
		"Teknaf",
		"Khagrachhari Sadar",
		"Dighinala",
		"Panchari",
		"Laxmichhari",
		"Mohalchari",
		"Manikchari",
		"Ramgarh",
		"Matiranga",
		"Guimara",
		"Bandarban Sadar",
		"Alikadam",
		"Naikhongchhari",
		"Rowangchhari",
		"Lama",
		"Ruma",
		"Thanchi",
		"Belkuchi",
		"Chauhali",
		"Kamarkhand",
		"Kazipur",
		"Raigonj",
		"Shahjadpur",
		"Sirajganj Sadar",
		"Tarash",
		"Ullapara",
		"Sujanagar",
		"Ishurdi",
		"Bhangura",
		"Pabna Sadar",
		"Bera",
		"Atghoria",
		"Chatmohar",
		"Santhia",
		"Faridpur",
		"Kahaloo",
		"Bogra Sadar",
		"Shariakandi",
		"Shajahanpur",
		"Dupchanchia",
		"Adamdighi",
		"Nondigram",
		"Sonatala",
		"Dhunot",
		"Gabtali",
		"Sherpur",
		"Shibganj",
		"Paba",
		"Durgapur",
		"Mohonpur",
		"Charghat",
		"Puthia",
		"Bagha",
		"Godagari",
		"Tanore",
		"Bagmara",
		"Natore Sadar",
		"Singra",
		"Baraigram",
		"Bagatipara",
		"Lalpur",
		"Gurudaspur",
		"Naldanga",
		"Akkelpur",
		"Kalai",
		"Khetlal",
		"Panchbibi",
		"Joypurhat Sadar",
		"Chapainawabganj Sadar",
		"Gomostapur",
		"Nachol",
		"Bholahat",
		"Shibganj",
		"Mohadevpur",
		"Badalgachi",
		"Patnitala",
		"Dhamoirhat",
		"Niamatpur",
		"Manda",
		"Atrai",
		"Raninagar",
		"Naogaon Sadar",
		"Porsha",
		"Sapahar",
		"Manirampur",
		"Abhaynagar",
		"Bagherpara",
		"Chougachha",
		"Jhikargacha",
		"Keshabpur",
		"Jessore Sadar",
		"Sharsha",
		"Assasuni",
		"Debhata",
		"Kalaroa",
		"Satkhira Sadar",
		"Shyamnagar",
		"Tala",
		"Kaliganj",
		"Mujibnagar",
		"Meherpur Sadar",
		"Gangni",
		"Narail Sadar",
		"Lohagara",
		"Kalia",
		"Chuadanga Sadar",
		"Alamdanga",
		"Damurhuda",
		"Jibannagar",
		"Kushtia Sadar",
		"Kumarkhali",
		"Khoksa",
		"Mirpur",
		"Daulatpur",
		"Bheramara",
		"Shalikha",
		"Sreepur",
		"Magura Sadar",
		"Mohammadpur",
		"Paikgasa",
		"Fultola",
		"Digholia",
		"Rupsha",
		"Terokhada",
		"Dumuria",
		"Botiaghata",
		"Dakop",
		"Koyra",
		"Fakirhat",
		"Bagerhat Sadar",
		"Mollahat",
		"Sarankhola",
		"Rampal",
		"Morrelganj",
		"Kachua",
		"Mongla",
		"Chitalmari",
		"Jhenaidah Sadar",
		"Shailkupa",
		"Harinakundu",
		"Kaliganj",
		"Kotchandpur",
		"Moheshpur",
		"Jhalakathi Sadar",
		"Kathalia",
		"Nalchity",
		"Rajapur",
		"Bauphal",
		"Patuakhali Sadar",
		"Dumki",
		"Dashmina",
		"Kalapara",
		"Mirzaganj",
		"Galachipa",
		"Rangabali",
		"Pirojpur Sadar",
		"Nazirpur",
		"Kawkhali",
		"Zianagar",
		"Bhandaria",
		"Mathbaria",
		"Nesarabad",
		"Barisal Sadar",
		"Bakerganj",
		"Babuganj",
		"Wazirpur",
		"Banaripara",
		"Gournadi",
		"Agailjhara",
		"Mehendiganj",
		"Muladi",
		"Hizla",
		"Bhola Sadar",
		"Borhan Sddin",
		"Charfesson",
		"Doulatkhan",
		"Monpura",
		"Tazumuddin",
		"Lalmohan",
		"Amtali",
		"Barguna Sadar",
		"Betagi",
		"Bamna",
		"Pathorghata",
		"Taltali",
		"Balaganj",
		"Beanibazar",
		"Bishwanath",
		"Companiganj",
		"Fenchuganj",
		"Golapganj",
		"Gowainghat",
		"Jaintiapur",
		"Kanaighat",
		"Sylhet Sadar",
		"Zakiganj",
		"Dakshinsurma",
		"Osmaninagar",
		"Barlekha",
		"Kamolganj",
		"Kulaura",
		"Moulvibazar Sadar",
		"Rajnagar",
		"Sreemangal",
		"Juri",
		"Nabiganj",
		"Bahubal",
		"Ajmiriganj",
		"Baniachong",
		"Lakhai",
		"Chunarughat",
		"Habiganj Sadar",
		"Madhabpur",
		"Sunamganj Sadar",
		"South Sunamganj",
		"Bishwambarpur",
		"Chhatak",
		"Jagannathpur",
		"Dowarabazar",
		"Tahirpur",
		"Dharmapasha",
		"Jamalganj",
		"Shalla",
		"Derai",
		"Belabo",
		"Monohardi",
		"Narsingdi Sadar",
		"Palash",
		"Raipura",
		"Shibpur",
		"Kaliganj",
		"Kaliakair",
		"Kapasia",
		"Gazipur Sadar",
		"Sreepur",
		"Shariatpur Sadar",
		"Naria",
		"Zajira",
		"Gosairhat",
		"Bhedarganj",
		"Damudya",
		"Araihazar",
		"Bandar",
		"Narayanganj Sadar",
		"Rupganj",
		"Sonargaon",
		"Basail",
		"Bhuapur",
		"Delduar",
		"Ghatail",
		"Gopalpur",
		"Madhupur",
		"Mirzapur",
		"Nagarpur",
		"Sakhipur",
		"Tangail Sadar",
		"Kalihati",
		"Dhanbari",
		"Itna",
		"Katiadi",
		"Bhairab",
		"Tarail",
		"Hossainpur",
		"Pakundia",
		"Kuliarchar",
		"Kishoreganj Sadar",
		"Karimgonj",
		"Bajitpur",
		"Austagram",
		"Mithamoin",
		"Nikli",
		"Harirampur",
		"Saturia",
		"Manikganj Sadar",
		"Gior",
		"Shibaloy",
		"Doulatpur",
		"Singiar",
		"Savar",
		"Dhamrai",
		"Keraniganj",
		"Nawabganj",
		"Dohar",
		"Munshiganj Sadar",
		"Sreenagar",
		"Sirajdikhan",
		"Louhajanj",
		"Gajaria",
		"Tongibari",
		"Rajbari Sadar",
		"Goalanda",
		"Pangsa",
		"Baliakandi",
		"Kalukhali",
		"Madaripur Sadar",
		"Shibchar",
		"Kalkini",
		"Rajoir",
		"Gopalganj Sadar",
		"Kashiani",
		"Tungipara",
		"Kotalipara",
		"Muksudpur",
		"Faridpur Sadar",
		"Alfadanga",
		"Boalmari",
		"Sadarpur",
		"Nagarkanda",
		"Bhanga",
		"Charbhadrasan",
		"Madhukhali",
		"Saltha",
		"Panchagarh Sadar",
		"Debiganj",
		"Boda",
		"Atwari",
		"Tetulia",
		"Nawabganj",
		"Birganj",
		"Ghoraghat",
		"Birampur",
		"Parbatipur",
		"Bochaganj",
		"Kaharol",
		"Fulbari",
		"Dinajpur Sadar",
		"Hakimpur",
		"Khansama",
		"Birol",
		"Chirirbandar",
		"Lalmonirhat Sadar",
		"Kaliganj",
		"Hatibandha",
		"Patgram",
		"Aditmari",
		"Syedpur",
		"Domar",
		"Dimla",
		"Jaldhaka",
		"Kishorganj",
		"Nilphamari Sadar",
		"Sadullapur",
		"Gaibandha Sadar",
		"Palashbari",
		"Saghata",
		"Gobindaganj",
		"Sundarganj",
		"Phulchari",
		"Thakurgaon Sadar",
		"Pirganj",
		"Ranisankail",
		"Haripur",
		"Baliadangi",
		"Rangpur Sadar",
		"Gangachara",
		"Taragonj",
		"Badargonj",
		"Mithapukur",
		"Pirgonj",
		"Kaunia",
		"Pirgacha",
		"Kurigram Sadar",
		"Nageshwari",
		"Bhurungamari",
		"Phulbari",
		"Rajarhat",
		"Ulipur",
		"Chilmari",
		"Rowmari",
		"Charrajibpur",
		"Sherpur Sadar",
		"Nalitabari",
		"Sreebordi",
		"Nokla",
		"Jhenaigati",
		"Fulbaria",
		"Trishal",
		"Bhaluka",
		"Muktagacha",
		"Mymensingh Sadar",
		"Dhobaura",
		"Phulpur",
		"Haluaghat",
		"Gouripur",
		"Gafargaon",
		"Iswarganj",
		"Nandail",
		"Tarakanda",
		"Jamalpur Sadar",
		"Melandah",
		"Islampur",
		"Dewangonj",
		"Sarishabari",
		"Madarganj",
		"Bokshiganj",
		"Barhatta",
		"Durgapur",
		"Kendua",
		"Atpara",
		"Madan",
		"Khaliajuri",
		"Kalmakanda",
		"Mohongonj",
		"Purbadhala",
		"Netrokona Sadar",
		"Eidgaon",
		"Madhyanagar",
		"Dasar",
	];


	return (
		<div className="w-full h-screen flex items-start">
			<div className="relative w-1/2 h-full flex flex-col">
				<img
					src={COVER_IMAGE}
					alt="Cover Image"
					className="w-full h-full object-fill"
				/>
			</div>
			<div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col px-20 py-10 justify-between">
				<form className="w-full flex flex-col max-w-[500px]" onSubmit={formSubmitHandler}>
					<div className="w-full flex flex-col mb-2">
						<h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
						<p className="text-sm mb-2">Please enter your details.</p>
					</div>

					<div className="w-full flex flex-col">
						<input
							type="text"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Full Name"
							required
							value={signupInfo.name}
							onChange={(e) => {
								onInputChangeHandler("name", e.target.value);
							}}
						/>
						<input
							type="email"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Email"
							required
							value={signupInfo.email}
							onChange={(e) => {
								onInputChangeHandler("email", e.target.value);
							}}
						/>
						<input
							type="text"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Phone"
							required
							value={signupInfo.phone}
							onChange={(e) => {
								onInputChangeHandler("phone", e.target.value);
							}}
						/>
						<input
							type="password"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Password"
							required
							value={signupInfo.password}
							onChange={(e) => {
								onInputChangeHandler("password", e.target.value);
							}}
						/>
						<input
							type="text"
							className="w-full text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
							placeholder="Area"
							required
							value={signupInfo.area}
							onChange={(e) => {
								onInputChangeHandler("area", e.target.value);
							}}
						/>
						<div>
							<select
								className="w-1/2 text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
								required
								value={signupInfo.district}
								onChange={(e) => {
									onInputChangeHandler("district", e.target.value);
								}}
							>
								<option value="" defaultValue hidden>
									District
								</option>
								{division.sort().map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
							</select>
							<select
								className="w-1/2 text-black border-b border-black py-4 my-4 bg-transparent outline-none focus:outline-none"
								required
								value={signupInfo.upazila}
								onChange={(e) => {
									onInputChangeHandler("upazila", e.target.value);
								}}
							>
								<option value="" defaultValue hidden>
									Upazilas
								</option>
								{upazilas.sort().map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="w-full flex flex-col">
						<button
							type="submit"
							className="w-full bg-[#060606] font-semibold rounded-md p-4 text-center flex items-start justify-center text-white"
						>
							Create Account
						</button>
					</div>
				</form>

				<div className="w-full flex items-center justify-center max-w-[500px]">
					<p className="text-sm font-normal text-[#060606]">
						Already have a account?{" "}
						<span className="font-semibold underline underline-offset-2 cursor-pointer">
							<Link to="/login">LogIn</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;

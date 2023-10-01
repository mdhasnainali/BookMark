import React, { useEffect } from "react";
import { useState } from "react";
import AddBookUser from "../components/AddBookUser";
import UserSidebar from "../components/UserSidebar";
import UserListedBooksTable from "../components/UserListedBooksTable";

const UserDashboard = () => {
	const [active, setActive] = useState("listings");
	const [component, setComponent] = useState();

	useEffect(
		(effect) => {
			switch (active) {
				case "listings":
					setComponent(<UserListedBooksTable />);
					break;
				case "add-books":
					setComponent(<AddBookUser />);
					break;
				default:
					setComponent(<UserListedBooksTable  />);
			}
		},
		[active]
	);

	return (
		<div className="bg-gray-100 flex w-full">
			<UserSidebar active={active} setActive={setActive} />
			<div className="w-full p-4">{component}</div>
		</div>
	);
};

export default UserDashboard;

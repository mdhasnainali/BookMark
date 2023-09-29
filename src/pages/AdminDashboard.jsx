import React, { useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import ReviewBookTable from "../components/ReviewBookTable";
import { useState } from "react";
import AdminDashboardCards from "../components/AdminDashboardCards";
import AddBookAdmin from "../components/AddBookAdmin";

const AdminDashboard = () => {
	const [active, setActive] = useState("requests");
	const [component, setComponent] = useState();

	useEffect(
		(effect) => {
			switch (active) {
				case "requests":
					setComponent(<ReviewBookTable />);
					break;
				case "dashboard":
					setComponent(<AdminDashboardCards />);
					break;
				case "add-books":
					setComponent(<AddBookAdmin />);
					break;
				// case "dashboard":
				// 	setComponent(<AdminDashboardCards />);
				// 	break;
				// case "dashboard":
				// 	setComponent(<AdminDashboardCards />);
				// 	break;
				default:
					setComponent(<AdminDashboardCards />);
			}
		},
		[active]
	);

	return (
		<div className="bg-gray-100 flex w-full">
			<AdminSidebar active={active} setActive={setActive} />
			<div className="w-full p-4">{component}</div>
		</div>
	);
};

export default AdminDashboard;

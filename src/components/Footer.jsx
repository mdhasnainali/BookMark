import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#FF971D] p-4">
			<div className="mx-auto text-center">
				<p className="text-white">
					© {new Date().getFullYear()} BookMark | All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

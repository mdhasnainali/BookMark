

const ReviewBookTable = () => {
	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
			<h4 className="mb-6 text-xl font-semibold text-black">
				Review Book Requests
			</h4>

			<div className="flex flex-col divide-y divide-solid">
				<div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-7">
					<div className="p-2.5 xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Book Name
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Authors
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Publishers
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Category
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Description
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Image
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Status
						</h5>
					</div>
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-7">
					<div className="flex items-center gap-3 p-2.5 xl:p-5">
						<p className="hidden text-black sm:block">English Grammar</p>
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<p className="text-black">A</p>
					</div>

					<div className="flex items-center justify-center p-2.5 xl:p-5">
						<p className="text-meta-3">A</p>
					</div>

					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<p className="text-black">B</p>
					</div>

					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<p className="text-meta-5">C</p>
					</div>
					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<div className="justify-center">
							<button className="w-full bg-blue-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Preview
							</button>
						</div>
					</div>
					<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
						<div className="justify-center">
							<button className="w-full bg-green-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Accept
							</button>
							<br />
							<button className="w-full bg-red-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white">
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewBookTable;

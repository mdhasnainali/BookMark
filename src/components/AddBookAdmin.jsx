import React from "react";

const AddBookAdmin = () => {
	return (
		<div className="rounded-sm border border-stroke bg-white shadow-default w-1/2 px-5">
			<div className="border-b border-stroke py-4 px-6">
				<h3 className="font-semibold text-black text-xl">Add New Books</h3>
			</div>
			<form action="#">
				<div className="p-6">
					<div className="w-full xl:w-full">
						<label className="mb-2.5 block text-black">
							Title <span className="text-meta-1">*</span>
						</label>
						<input
							type="text"
							placeholder="Book Title"
							className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
							required
						/>
					</div>

					<div className="mb-5">
						<label className="mb-3 block text-black">
							Authors <span className="text-meta-1">*</span>
						</label>
						<input
							type="text"
							placeholder="Book Authors"
							className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
						/>
					</div>

					<div className="mb-4 flex flex-col gap-6 xl:flex-row">
						<div className="mb-4 w-1/2">
							<label className="mb-3 block text-black">
								Genre <span className="text-meta-1">*</span>
							</label>
							<div className="relative z-20 bg-transparent">
								<select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary">
									<option value="" disabled selected>
										Genre
									</option>
									<option value="">A</option>
									<option value="">B</option>
									<option value="">C</option>
								</select>
								<span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
									<svg
										className="fill-current"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g opacity="0.8">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
												fill=""
											></path>
										</g>
									</svg>
								</span>
							</div>
						</div>
						<div className="mb-5 w-1/2">
							<label className="mb-3 block text-black">
								Publishers <span className="text-meta-1">*</span>
							</label>
							<input
								type="text"
								placeholder="Book Publishers"
								className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
							/>
						</div>
					</div>

					<div className="mb-5">
						<label className="mb-3 block text-black">
							Image <span className="text-meta-1">*</span>
						</label>
						<input
							type="text"
							placeholder="Book Image"
							className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
						/>
					</div>

					<div className="mb-6">
						<label className="mb-2.5 block text-black">
							Description <span className="text-meta-1">*</span>
						</label>
						<textarea
							rows={3}
							placeholder="Description of the book"
							className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
						></textarea>
					</div>

					<button className="flex w-full justify-center rounded bg-red-400 p-3 font-medium text-gray">
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddBookAdmin;

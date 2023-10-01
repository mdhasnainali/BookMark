import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const ExistingGeners = () => {
	let user = useAuth();

	// Genre Management
	const [genres, setGenres] = useState([]);

	// Fetch Genre
	const fetchGenre = async () => {
		const url = "http://146.190.160.22:8080/api/v1/books/category";
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.user?.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setGenres(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchGenre();
	}, [genres]);

	const handleDelete = (id) => {
		const index = genres
			.map((genre) => {
				return genre.category_id == id;
			})
			.indexOf(true);
		console.log(index);
		let name = genres[index].category_name;

		const newGenre = genres;
		newGenre.splice(index, 1);
		setGenres(newGenre);
		console.log(genres);
		deleteGenre(name);
	};

	const deleteGenre = async (name) => {
		const url = `http://146.190.160.22:8080/api/v1/admin/category?categoryName=${name}`;

		fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.user?.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Edit Genres
	const [editing, setEditing] = useState(false);
	const [editingNumber, setEditingNumber] = useState(-1);
	const [editedValue, setEditedValue] = useState("");

	const handleEditClick = (index, id, name) => {
		setEditing(true);
		setEditingNumber(id);
		setEditedValue(name);
	};

	const handleSaveClick = (oldName) => {
		setEditing(false);
		setEditingNumber(-1);
		console.log(editedValue);
		updateGenre(oldName);
	};

	const updateGenre = async (oldName) => {
		const url = `http://146.190.160.22:8080/api/v1/admin/category?categoryName=${oldName}`;

		fetch(url, {
			// mode: "no-cors",
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ "category_name": editedValue }),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onInputChangeHandler = (newValue) => {
		setEditedValue(newValue);
		console.log(newValue);
	};


	// Add New Genre Request
	const [newGenre, setNewGenre] = useState("");
	const [newGenreStatus, SetNewGenreStatus] = useState(false);

	const handleNewGenre = (e) => {
		SetNewGenreStatus(true);
	}

	const addNewGenre = async () => {
		SetNewGenreStatus(false);

		const url = `http://146.190.160.22:8080/api/v1/admin/category`;

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${user.user?.token}`,
			},
			body: JSON.stringify({ "category_name": newGenre}),
		})
			.then((response) => {
				return response.json();
			})
			.catch((err) => {
				console.log(err);
			});
	};


	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
			<div className="flex justify-between w-full px-4">
				<h4 className="mb-6 text-xl font-semibold text-black">Genre List</h4>
				<div>
					{newGenreStatus ? (
						<div className="flex">
							<input
								type="text"
								className="w-64 mr-6 border border-stroke rounded-md py-1 px-2" 
								onChange={(e) => setNewGenre(e.target.value)}
							/>
							<button
								className="bg-green-500 font-semibold rounded-md px-4 text-center text-white py-2"
								onClick={()=>addNewGenre()}
							>
								Add
							</button>
						</div>
					) : (
						<button
							className="bg-green-500 font-semibold rounded-md px-4 py-2 text-center text-white"
							onClick={() => handleNewGenre()}
						>
							Add New Genre
						</button>
					)}
				</div>
			</div>

			<div className="flex flex-col divide-y divide-solid">
				<div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-4">
					<div className="p-2.5 xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Genre Name
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Genre Id
						</h5>
					</div>
					<div className="p-2.5 text-center xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Edit
						</h5>
					</div>
					<div className="hidden p-2.5 text-center sm:block xl:p-5">
						<h5 className="text-sm font-medium uppercase xsm:text-base">
							Delete
						</h5>
					</div>
				</div>
				{genres.map((genre, index) => {
					return (
						<div
							className="grid grid-cols-3 sm:grid-cols-4"
							key={genre.category_id}
							id={genre.category_id}
						>
							<div className="flex items-center gap-3 p-2.5 xl:p-5">
								{editing == true && editingNumber == genre.category_id ? (
									<input
										className="text-black sm:block px-2 py-1 rounded-md border border-stroke w-full"
										value={editedValue}
										onChange={(e) => onInputChangeHandler(e.target.value)}
									/>
								) : (
									<p
										className="hidden text-black sm:block"
										value={genre.category_name}
									>
										{genre.category_name}
									</p>
								)}
							</div>

							<div className="flex items-center justify-center p-2.5 xl:p-5">
								<p className="text-black" value={genre.category_name}>
									{genre.category_id}
								</p>
							</div>
							<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
								<div className="justify-center">
									{editing == true && editingNumber == genre.category_id ? (
										<button
											className="w-full bg-green-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white"
											onClick={() => handleSaveClick(genre.category_name)}
										>
											Save
										</button>
									) : (
										<button
											className="w-full bg-green-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white"
											onClick={() =>
												handleEditClick(
													index,
													genre.category_id,
													genre.category_name
												)
											}
											value={genre.category_id}
										>
											Edit
										</button>
									)}
								</div>
							</div>
							<div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
								<div className="justify-center">
									<button
										className="w-full bg-red-500 font-semibold rounded-md p-2 text-center flex items-start justify-center text-white"
										onClick={() => handleDelete(genre.category_id)}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ExistingGeners;

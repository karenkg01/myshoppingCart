import { useState } from "react";
import NavBar from "./NavBar";

const Admin = () => {
	const [name, setName] = useState("");
	const [orders, setOrders] = useState([]);

	const getData = async (e) => {
		const response = await fetch(`http://localhost:3005/getUser/${name}`, {
			method: "GET",
		});
		const data = await response.json();

		setOrders(data);
	};

	return (
		<div>
			<NavBar />
			<h1>Shopping Cart</h1>
			<div class="d-flex flex-row justify-content-center ">
				<div class="col-3 d-flex flex-row ">
					<input
						type="search"
						className="form-control"
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="button" className="btn btn-primary" onClick={getData}>
						Search
					</button>
				</div>
			</div>
			<div>
				{/* TODO: Make this an "Orders" table */}
				{/* TODO: Show each item in each order */}

				{orders.map((item) => {
					return (
						<div>
							<div>{item.name}</div>
							<div>{item.address}</div>
							<div>{item.email}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Admin;

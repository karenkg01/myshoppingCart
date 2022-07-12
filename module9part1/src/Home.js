import { useState } from "react";
import NavBar from "./NavBar";

const Home = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [shoppingItems, setShoppingItems] = useState([]);

	return (
		<div>
			<NavBar />
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						fetch("http://localhost:3005/user", {
							method: "POST",
							body: JSON.stringify({ name, address, email, shoppingItems }),
							headers: {
								"Content-Type": "application/json",
							},
						});
					}}
				>
					<div className="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label for="address">Address</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
			<br></br>
			<h1>Shopping Cart</h1>
			<div>
				{shoppingItems.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
			<div>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">TV</h5>
						<p className="card-text">ASUS SA555-Y Smart Signage</p>
						<button
							onClick={() => {
								// setShoppingItems("ASUS SA555-Y Smart Signage");
								setShoppingItems((oldItems) => [
									...oldItems,
									"ASUS SA555-Y Smart Signage",
								]);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Cars</h5>
							<p className="card-text">Rougue Nissan 2019</p>
							<button
								onClick={() => {
									setShoppingItems((oldItems) => [
										...oldItems,
										"Rougue Nissan 2019",
									]);
								}}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

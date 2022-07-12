const express = require("express");
const mongoose = require("mongoose");
const User = require("./Model/schema");
const app = express();
const port = 3005;
const cors = require("cors");
const bodyParser = require("body-parser");
let db;

mongoose.connect("mongodb://localhost:27017/orderManager");
const col_name = "userlist";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/user", async (req, res) => {
	// db.collection(col_name).insert(req.body, (err, result) => {
	// 	if (err) throw err;
	// 	res.send("data inserted");
	// });

	const user = new User({ ...req.body, date: new Date() });
	console.log(req.body);
	await user.save();
	res.send("User Added");
});

app.get("/getUser/:name", async (req, res) => {
	// db.collection(col_name)
	// 	.find()
	// 	.toArray((err, result) => {
	// 		if (err) throw err;
	// 		res.send(result);
	// 	});
	const orders = await User.find({ name: req.params.name });
	res.send(orders);
});

app.listen(port, () => {
	console.log("API is running on port " + port);
});

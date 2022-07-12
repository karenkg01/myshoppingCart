const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	address: String,
	email: String,
	shoppingItems: [String],
	date: Date,
});
const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require('mongoose');

const modelName = 'User';
const modelSchema = new mongoose.Schema({
	userName: String,
	email: String,
	password: String,
	roles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role'
		}
	]
});

const User = mongoose.model(modelName, modelSchema);

module.exports = User;

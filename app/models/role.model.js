const mongoose = require('mongoose');

const modelName = 'Role';
const modelSchema = new mongoose.Schema({
	name: String
});

const Role = mongoose.model(modelName, modelSchema);

module.exports = role;

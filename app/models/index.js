const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;
db.user = require('./user.model');
db.role = require('./role.model');
db.ROLES = ['user', 'admin', 'moderator'];

// Firt-time initialization adding roles, if Role collection is empty
db.init = function () {
	console.log('DB initialization in progress...');
	let Role = db.role;
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'user',
			}).save((err) => {
				if (err) {
					console.log('Error initializing role: user');
				} else {
					console.log('Succesfully added role to roles collection: user');
				}
			});

			new Role({
				name: 'moderator',
			}).save((err) => {
				if (err) {
					console.log('Error initiazing role: moderator');
				} else {
					console.log('Succesfullly added role to roles collection: moderator');
				}
			});

			new Role({
				name: 'admin',
			}).save((err) => {
				if (err) {
					console.log('Error initiazing model: admin');
				} else {
					console.log('Succesfullly added role to roles collection: admin');
				}
			});
		}
	});
};

module.exports = db;

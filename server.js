const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
	origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type = application/json
app.use(bodyParser.json());

// parse requests of content-type -application/x-www-form-urlencoed
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize data model
const dbConfig = require('./app/config/db.config.js');
const db = require('./app/models');

//Connecting to the database
db.mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Succesfully connected to MongoDB.'))
	.then(db.init)
	.then(() => console.log('DB initialization done.'))
	.catch((err) => {
		console.error('Error connection to MongoDB!', err);
	});

//simple route
app.get('/', (req, res) => {
	res.json({ message: 'hey' });
});

// set port, listen to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log('Server is running on port', PORT);
});

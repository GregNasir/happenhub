// // Connect to db
// const { connect, connection } = require('mongoose');

// const connectionString =
//     process.env.MONGODB_URI || 'mongodb://localhost:27017/happenhubDB';

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = connection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happenhubDB');

module.exports = mongoose.connection;
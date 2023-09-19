// Connect to db

// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };


// const { connect, connection } = require('mongoose');

// const connectionString =
//     process.env.MONGODB_URI || 'mongodb://localhost:27017/happenhubDB';

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = connection;

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happenhubDB');

// module.exports = mongoose.connection;

// const mongoose=require("mongoose")
// mongoose.connect("mongodb://0.0.0.0:27017/happenhubDB")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


// const newSchema=new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = mongoose.model("user",newSchema)

// module.exports=collection






const mongoose = require("mongoose");


module.exports = () => {
	// const connectionParams = {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// };

	try {
		const uri = `mongodb://localhost:27017/${process.env.DB_NAME}`;
		mongoose.connect(uri, {

		user: process.env.DB_USER, // Use process.env to access environment variables
		pass: process.env.DB_PASSWORD, // Use process.env to access environment variables
		});
		console.log("Connected to database successfully");
	} catch (error) {
		console.error(error);
		console.log("Could not connect to the database!");
	}
};

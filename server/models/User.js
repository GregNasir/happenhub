// const mongoose = require('mongoose');
// const { Schema, model, Types } = require('mongoose');
// const bcrypt = require('bcrypt');
// const SALT_WORK_FACTOR = 10;

// const userSchema = new Schema({
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       "Please fill a valid email address",
//     ],
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   // favorites: Define favorites property here if needed
// });

// userSchema.pre('save', function(next) {
//   const user = this;

//   // Only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // Generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     // Hash the password using our new salt
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);

//       // Override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// // Create the User model using the UserSchema
// module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose');


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

// const collection = mongoose.model("users",newSchema)

// module.exports=collection

// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

// const userSchema = new mongoose.Schema({
const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Must match an email address!'],},
	password: { type: String, required: true, minlength: 5 },
	favorite: [
		{
			type: String,
			trim: true,
		},
	],
},
	
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
if (this.isNew || this.isModified('password')) {
	const saltRounds = 10;
	this.password = await bcrypt.hash(this.password, saltRounds);
}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;



// userSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "2h",
// 	});
// 	return token;
// };

// const User = mongoose.model("User", userSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

// module.exports = { User, validate };
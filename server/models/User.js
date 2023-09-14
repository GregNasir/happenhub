const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
}

    }
    );



    userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});
// create the User model using the UserSchema
const User = model('User', userSchema);
// export the User model
module.exports = User;
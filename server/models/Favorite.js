const { Schema, model, Types } = require('mongoose');
// import moment module to format the timestamp 
const moment = require('moment')


// favorite schema
const favoriteSchema = new Schema (
    {
        favoriteLink: {
            type: Object,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)


// get total count of favorites
favoriteSchema.virtual('favoriteCount')
.get(function() {
    return this.favorites.length;
})

// create the User model using the UserSchema
const Favorite = model('Favorite', favoriteSchema);
// export the Favorite model
module.exports = Favorite;
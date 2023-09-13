const { User } = require('../models');

const resolvers = {
        Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        },


    Mutation: {
        addUser: async (parent, { name }) => {
            return User.create({ name });
            },
            addLocation: async (parent, { userId, location }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                $addToSet: { locations: location },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            },
            removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
            },
            removeLocation: async (parent, { userId, location }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { locations: location } },
                { new: true }
            );
            },
        },
        };


module.exports = resolvers;
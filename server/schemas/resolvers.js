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
            addFavorite: async (parent, { userId, favorite }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                $addToSet: { favorites: favorite },
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
            removeFavorite: async (parent, { userId, favorite }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { favorites: favorite } },
                { new: true }
            );
            },
        },
        };


module.exports = resolvers;
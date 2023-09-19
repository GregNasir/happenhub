// const { User } = require('../models');

// const resolvers = {
//         Query: {
//         users: async () => {
//             return User.find();
//         },

//         user: async (parent, { userId }) => {
//             return User.findOne({ _id: userId });
//         },
//         },


//     Mutation: {
//         addUser: async (parent, { name }) => {
//             return User.create({ name });
//             },
//             addFavorite: async (parent, { userId, favorite }) => {
//             return User.findOneAndUpdate(
//                 { _id: userId },
//                 {
//                 $addToSet: { favorites: favorite },
//                 },
//                 {
//                 new: true,
//                 runValidators: true,
//                 }
//             );
//             },
//             removeUser: async (parent, { userId }) => {
//             return User.findOneAndDelete({ _id: userId });
//             },
//             removeFavorite: async (parent, { userId, favorite }) => {
//             return User.findOneAndUpdate(
//                 { _id: userId },
//                 { $pull: { favorites: favorite } },
//                 { new: true }
//             );
//             },
//         },
//         };


// module.exports = resolvers;

const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
        return User.find();
        },

        user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
        // addUser: async (parent, args, context) => {
            try{
                console.log("Add profile mutation HIT!")    
                console.log("name: ", lastName)
                console.log(email);
                // return User.create({ firstName, lastName, email, password });
                const user =  await User.create({ firstName, lastName, email, password });
                console.log("got to my user")
                // const user =  await User.create(args, context);
                const token = signToken(user)
                console.log(token)
                return { token, user };

            }    catch(error){
                console.log("Add profile error")
                console.log(error)
            }
        
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

                if (!user) {
                throw AuthenticationError
                }
        
                const correctPw = await user.isCorrectPassword(password);
        
                if (!correctPw) {
                throw AuthenticationError
                }
        
                const token = signToken(user);
                return { token, user };
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
                //                 { _id: userId },
                //                 { $pull: { favorites: favorite } },
                //                 { new: true }
                );
            },
    
    },
};

module.exports = resolvers;

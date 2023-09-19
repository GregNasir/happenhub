const typeDefs = `#graphql
    type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        favorites: [String]
    }

    # Set up an Auth type to handle returning data from a profile creating or user login
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(userId: ID!): User
        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        me: User
    }

    type Mutation {
        # Set up mutations to handle creating a user or logging into a profile and return Auth type
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addFavorite(userId: ID!, favorite: String!): User
        removeUser(userId: ID!): User
        removeFavorite(userId: ID!, favorite: String!): User
    }

`;

module.exports = typeDefs;

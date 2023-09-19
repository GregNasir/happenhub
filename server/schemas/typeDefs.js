const typeDefs = `#graphql
type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        favorites: [String]
    }

    type Query {
        users: [User]
        user(userId: ID!): User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        addFavorite(userId: ID!, favorite: String!): User
        removeUser(userId: ID!): User
        removeFavorite(userId: ID!, favorite: String!): User
    }

`;

module.exports = typeDefs;

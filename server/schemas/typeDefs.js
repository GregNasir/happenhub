const typeDefs = `#graphql
    type User {
        _id: ID
        name: String
        favorite: [String]!
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(name: String!): User
        addFavorite(userId: ID!, favorite: String!): User
        removeUser(userId: ID!): User
        removeFavorite(userId: ID!, favorite: String!): User
    }
`;

module.exports = typeDefs;

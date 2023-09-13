const typeDefs = `#graphql
    type User {
        _id: ID
        name: String
        location: [String]!
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(name: String!): User
        addLocation(userId: ID!, location: String!): User
        removeUser(userId: ID!): User
        removeLocation(userId: ID!, location: String!): User
    }
`;

module.exports = typeDefs;

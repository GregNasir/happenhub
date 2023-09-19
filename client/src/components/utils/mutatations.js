import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
            firstName
            lastName
            email
            password
        }
        
    }
}
`;

export const ADD_FAVORITE = gql`
    mutation addFavorite($userId: ID!, $user: String!) {
        addFavorite(userId: $userId, user: $user) {
        firstName
        lastName
        email
        }
    }
`;

export const LOGIN_USER = gql`
        mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                email
            }
        }
    }
`;

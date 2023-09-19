import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
        firstName
        lastName
        email
        favorites
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
        firstName
        lastName
        email
        favorites
        }
    }
`;
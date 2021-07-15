import { gql } from '@apollo/client';

export const fetchingRepositories = gql`
    query{
        repositories {
            edges {
                node {
                    id
                    fullName
                    description
                    language
                    forksCount
                    stargazersCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl  
            }
        }
    }
 }
`

export const checkAuthorizedUser = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`
import { gql } from '@apollo/client';
 
export const Authorize_User = gql`
 mutation AuthorizingUser($username: String!, $password: String!){
     authorize(credentials: {username: $username, password: $password}){
         accessToken
     }
 }
`


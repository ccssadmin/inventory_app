import { gql } from "@apollo/client";


export const LOGIN_MUTATION = gql`
  mutation createUser($username: String!, $password: String!) {
  createUser(username: $username , password:$password , ) {
    message
    success
    data {
      createdAt
      isactive
      username
      password
      updatedAt
      userId
    }
  }
}
`;
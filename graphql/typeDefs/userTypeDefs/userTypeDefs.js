import {gql} from "apollo-server-express"

const userTypeDef = gql`
type User {
id: ID!
firstName: String!
lastName: String!
}

type Query {
    users: [User]
}


type Mutation {
    createUser(firstName: String!, lastName: String!) : User
}
    `;
export default userTypeDef
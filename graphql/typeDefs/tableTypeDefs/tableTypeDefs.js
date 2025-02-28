import {gql} from "apollo-server-express"


const tableTypeDefs = gql`
type Table {
id: ID!
name: String!
description: String
}

type Query {

table: [Table]


}

type Mutation {

createTable(name: String!, description: String): Table
}

`;

export default tableTypeDefs
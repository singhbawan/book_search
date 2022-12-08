// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}
input BookDetails{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookDetails!): User
    removeBook(bookId: ID!): User
}

`;

// export the typeDefs
module.exports = typeDefs;
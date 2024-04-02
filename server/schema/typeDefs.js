const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        trails: [Trail]
    }

    type Trail {
        trailId: ID
        name: String
        description: String
        weather: String
        image: String
    
    }

    input TrailInput {
        trailId: ID
        name: String
        description: String
        weather: String
        image: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(username: String, password: String):Auth
        addUser(username: String, password: String):Auth
        saveTrail(trailData: TrailInput):User
        removeTrail(trailId: ID):User
    }

    type Mutation {
        login(username: String, password: String):Auth
        addUser(username: String, password: String):Auth
        saveTrail(trailData: TrailInput):User
        addTrail(trailId: ID):User
    }
`

module.exports = typeDefs;
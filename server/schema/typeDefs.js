const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        trails: [Trail]
        completedTrails: [CompletedTrail]
    }
    
    type Wildlife {
        _id: ID
        name: String
        description: String
        image: String
    }

    type Trail {
        _id: ID
        trailId: ID
        name: String
        description: String
        length: String
        weather: String
        image: String,
        comments: [Comment]
    }
    


    input TrailInput {
        _id: String
        name: String
        description: String
        weather: String
        image: String
        comments: CommentInput
    }


    type CompletedTrail {
        trailName: String,
        dateCompleted: String,
        trailComment: String
    }

    input CompletedTrailInput {
        trailName: String,
        dateCompleted: String,
        trailComment: String
    }

    type Comment {
        commentText: String,
        likes: Int,
        likesCount: Int
    }

    input CommentInput {
        commentText: String,
        likes: Int,
        likesCount: Int
    }

    type Auth {
        token: ID
        user: User
    }


    type Query {
        me: User
        allTrails: [Trail]
        oneTrail(trailId: ID!): Trail
    }
    
    type Mutation {
        login(username: String, password: String):Auth
        addUser(username: String, password: String):Auth
        saveTrail(trailData: TrailInput):User
        removeTrail(trailId: String):User
        completeTrail(completeData: CompletedTrailInput):User
        addComment(commentData: CommentInput): Trail

    }
`

module.exports = typeDefs;
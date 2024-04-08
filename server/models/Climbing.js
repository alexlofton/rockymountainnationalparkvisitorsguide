const { Schema, types, model } = require('mongoose');
const commentSchema = require("./Comment")
const Trail = require("./Trail")

const climbingSchema = new Schema(
    {

        name: {
            type: String
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        comments: [commentSchema]
    },

    {

        toJSON: {
            virtuals: true,
        },
    }
);

const Climbing = model("climbing", climbingSchema)

module.exports = Climbing; 
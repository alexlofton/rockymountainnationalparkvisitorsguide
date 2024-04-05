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
<<<<<<< HEAD
        trail: [Trail],
=======
>>>>>>> a19f0e5d8920aef8a03d564c47cf74871a0f7ef6
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
const { Schema, Types, model } = require('mongoose');
const commentSchema = require("./Comment")

const trailSchema = new Schema(
{
 
    name: {
        type: String
    },
    weather: {
        type: String
    },
    description: {
        type: String
    },
    length: {
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
 const Trail = model("trail", trailSchema)

module.exports = Trail;

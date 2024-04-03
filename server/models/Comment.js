const { Schema, Types, model } = require('mongoose');

const commentSchema = new Schema(
    {
        commentText: {
            type: String
        },
        likes: {
            type: Number
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }

);

commentSchema.virtual('likesCount').get(function() {
    return this.likes // possible need to add.value
});

module.exports = commentSchema;
const { Schema, Types, model } = require('mongoose');

const completedTrailSchema = new Schema(
{    
    trailName: {
        type: String
    },
    dateCompleted: {
        type: String
    },
    //possible reference to userModel?
},


{
    toJSON: {
    virtuals: true,
    },
}
);

module.exports = completedTrailSchema;

const { Schema, Types, model } = require('mongoose');

const trailSchema = new Schema(
{

    name: {
        type: String
    },
    description: {
        type: String
    },
    weather: {
        type: String
    },
    image: {
        type: String
    }

},

{
    toJSON: {
    virtuals: true,
    },
}
);

module.exports = trailSchema;

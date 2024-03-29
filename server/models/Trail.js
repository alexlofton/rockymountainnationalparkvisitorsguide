const { Schema, Types, model } = require('mongoose');

const trailSchema = new Schema(
{
    // trailId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId()
    // },
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

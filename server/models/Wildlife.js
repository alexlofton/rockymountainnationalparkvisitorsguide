const { Schema, Types, model } = require('mongoose');

const wildlifeSchema = new Schema(
    {
        name: {
            type: String
        },
        scientificName: {
            String
        },
        description: {
            String
        },
        season: {
            String
        },
        image: {
            type: String
        },
        seebByUser: {
            type: Boolean
        }
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

module.exports = wildlifeSchema;
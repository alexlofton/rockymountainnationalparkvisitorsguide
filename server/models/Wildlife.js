const { Schema, Types, model } = require('mongoose');
const mongoose = require('mongoose');

const wildlifeSchema = new Schema(
    {
        name: {
            type: String
        },
        scientificname: {
            String
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Wildlife = model("Wildlife", wildlifeSchema)

module.exports = Wildlife;
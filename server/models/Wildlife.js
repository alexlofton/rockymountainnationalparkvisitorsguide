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
            type: String
        },
        image: {
            type: String
        }
        // },
        // seenByUser: {
        //     type: Boolean,
        //     default: false
        // }
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

wildlifeSchema.virtual('notSeenByUser').get(function() {
    return !this.seenByUser;
});

const Wildlife = model("wildlife", wildlifeSchema)

module.exports = Wildlife;
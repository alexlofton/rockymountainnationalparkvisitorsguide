const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const  Trail = require('./Trail');
//const commentSchema = require('./Comment');
// const completedTrailSchema = require("./completedTrail.js");
const Wildlife = require('./Wildlife');
const Climbing = require('./Climbing')

const userSchema = new Schema(
{
    username: {
    type: String,
    required: true,
    unique: true,
    },
    password: {
    type: String,
    required: true,
    },
    
    trail: [{
        type: Schema.Types.ObjectId,
        ref: 'trail'
    }],
    // completedTrails: [completedTrailSchema], // strings that will receive mapped names from Trail model and complete date from datepicker !!!!!doesnt need to be its own schema
    climbing: [{
        type: Schema.Types.ObjectId,
        ref: 'climbing'
    }],
    wildlife: [{
        type: Schema.Types.ObjectId,
        ref: 'wildlife'
    }],
    //comments: [commentSchema]
},

{
    toJSON: {
    virtuals: true,
    },
}
);

// hash user password
userSchema.pre('save', async function (next) {
if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
}

next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

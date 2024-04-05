const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Wildlife } = require("../models");
const { Trail } = require("../models");
const { Climbing } = require("../models")
const { signToken } = require("../utils/auth");
const { Schema, Types, model } = require('mongoose');
const { FormErrorIcon } = require("@chakra-ui/react");

const resolvers = {
Query: {
    me: async (parent, args, context) => {
    if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select("-__v -password")
        // .populate("trails");

        return userData;
    }

    throw new AuthenticationError("Not logged in");
    },
    // need queries for Trails
    allTrails: async (parent, args, context) => {
    if (context.user) {
        const trailData = await Trail.find({});

        return trailData;
    }

    throw new AuthenticationError("Not logged in");
    },

    getAllWildLife: async (parent, arg, context) => {
        if (context.user) {
            const wildlifeData = await Wildlife.find({});

            return wildlifeData
        }
      
    },

    allClimbing: async (parent, arg, context) => {
        if (context.user) {
            const climbingData = await Climbing.find({});

            return climbingData
        }
    }
},

Mutation: {
    addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
    },

    // addWildlife: async (parent, args) => {
    // const newWildlife = await wildlifeSchema.create(args);

    // return { newWildlife }
    // },

    login: async (parent, { username, password }) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new AuthenticationError("Incorrect credentials");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
    }

    const token = signToken(user);
    return { token, user };
    },

    saveTrail: async (parent, { trailData }, context) => {
    if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { trails: trailData } },
        { new: true }
        );

        return updatedUser;
    }

    throw new AuthenticationError("You need to be logged in!");
    },

    removeTrail: async (parent, { trailId }, context) => {
    if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { trails: { trailId } } },
        { new: true }
        );

        return updatedUser;
    }

    throw new AuthenticationError("You need to be logged in!");
    },

    completeTrail: async (parent, { completeData }, context) => {
        if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { completedTrails: completeData } },
        { new: true }
        );
        
        return updatedUser;
        }
        
        throw new AuthenticationError('You need to be logged in!');
        },

        // remove from complete trails nice to have reference removeTrail


        // comment

    },
};

module.exports = resolvers;

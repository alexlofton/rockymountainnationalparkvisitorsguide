const { User } = require('../models');
const { signToken} = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{_id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'No user found with matching id' });
        }

        res.json(foundUser);
    },

    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: "Something went wrong!"})
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }] });
        if(!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
            return res.status(400).json({message: 'Wrong Password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async saveTrail({ user, body }, res) {
        console.log(user);
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedTrails: body } },
                { new: true, runValidators: true }
            );
            return res.json(updateUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json.user;
        }
    },

    async deleteTrail({ user, params }, res) {
        const updateUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: params.bookId } } },
            { new: true }
        );
        if (!updateUser) {
            return res.status(404).json({ message: "Couldn't find a user with this id!"});
        }
        return res.json(updatedUser);
    },
};
const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    saveTrail,
    deleteTrail,
    login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveTrail);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/trails/:trailId').delete(authMiddleware, deleteTrail);

module.exports = router;
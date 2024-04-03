const db = require('../config/connection');
const { Wildlife
    // , Trail, Climbing, User,
 } = require('../models');
const wildlifeSeeds = require('./wildlifeSeeds.json')

db.once('open', async () => {
    try {
        await cleanDB('Wildlife', 'wildlives')

        await Wildlife.create(wildlifeSeeds);

        console.log('seeds do be seeded');
        process.exit(0);
    } catch (err) {

    }
})
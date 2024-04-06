const db = require('../config/connection');
const { Wildlife, Trail, Climbing, User } = require('../models');
const wildlifeSeeds = require('../seeders/wildlifeSeeds.json')
const climbingSeeds = require('../seeders/climbingSeeds.json')
const trailSeeds = require('../seeders/trailSeeds.json')
const cleanDB = require('./cleanDB')

db.once('open', async () => {
    try {
        await cleanDB('Wildlife', 'wildlife');
        await cleanDB('Climbing', 'climbing');
        await cleanDB('Trail', 'trails');
        await Wildlife.create(wildlifeSeeds);
        await Climbing.create(climbingSeeds);
        await Trail.create(trailSeeds);

        console.log('seeds seeded');
        process.exit(0);
    } catch (err) {
        console.error("error during seeding:", err);
        process.exit(1);
    }
});
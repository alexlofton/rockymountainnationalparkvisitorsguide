const db = require('../config/connection');
const { wildlifeSchema
    // , Trail, Climbing, User,
 } = require('../models');
const wildlifeSeeds = require('../seeders/wildlifeSeeds.json')
const cleanDB = require('./cleanDB')

db.once('open', async () => {
    try {
        await cleanDB('wildlifeSchema', 'wildlives')

        await wildlifeSchema.create(wildlifeSeeds);

        console.log('seeds seeded');
        process.exit(0);
    } catch (err) {
        console.error("error during seeding:", err);
        process.exit(1);
    }
})
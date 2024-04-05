const db = require('../config/connection');
const { wildlifeSchema
    // , Trail, Climbing, User,
 } = require('../models');
const wildlifeSeeds = require('../seeders/wildlifeSeeds.json')
const cleanDB = require('./cleanDB')

db.once('open', async () => {
    try {
        await cleanDB('Wildlife', 'wildlives')

        await wildlifeSchema.create(wildlifeSeeds);

        console.log('seeds do be seeded');
        process.exit(0);
    } catch (err) {

    }
})
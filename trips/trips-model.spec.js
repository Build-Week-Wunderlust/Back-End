const db = require('../database/dbConfig');
const Trips = require('./trips-model');

const { add } = require('./trips-model');

describe('Trips model', () => {
    describe('add', () => {
    beforeEach(async () => {
        await db('trips').truncate();
    });
    
    it('should add a trip', async () => {
        await add({ tourname: 'Hiking', description: 'nice climb', price: 'free', duration: '2 hours', location: 'Eaton Canyon', guide_id: 1 })

        const trips = await db('trips');

        expect(trips).toHaveLength(1);
    });
 })
})
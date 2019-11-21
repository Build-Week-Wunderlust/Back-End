const db = require('../../database/dbConfig');
const Tourists = require('./tourists-model');

const { add } = require('./tourists-model');

describe('tourists model', () => {
    describe('add', () => {
    beforeEach(async () => {
        await db('tourists').truncate();
    });

    describe('Add new guide', () => {
        it('Should be empty', async () => {
            const tourists = await db('tourists');
            expect(tourists).toHaveLength(0);
        })

        it('Should add a new guide', async () => {
            await Tourists.add({ firstname: 'bill', lastname: 'bob', user_id: '1' });
            const tourists = await db('tourists');
            expect(tourists).toHaveLength(1);
        })
    })
  })
})
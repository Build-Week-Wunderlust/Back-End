const db = require('../../database/dbConfig');
const Guides = require('./guides-model');

const { add } = require('./guides-model');

describe('Guides model', () => {
    describe('add', () => {
    beforeEach(async () => {
        await db('guides').truncate();
    });

    describe('Add new guide', () => {
        it('Should be empty', async () => {
            const guides = await db('guides');
            expect(guides).toHaveLength(0);
        })

        it('Should add a new guide', async () => {
            await Guides.add({ email: 'bill@gmail', username: 'BillyBoy', password: 'hello' });
            const guides = await db('guides');
            expect(guides).toHaveLength(1);
        })
    })
  })
})
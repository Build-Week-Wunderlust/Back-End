const db = require('../../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('tourists').select('id', 'username');
}

function findBy(filter) {
  return db('tourists').where(filter);
}

async function add(user) {
  const [id] = await db('tourists').insert(user);

  return findById(id);
}

function findById(id) {
  return db('tourists')
    .where({ id })
    .first();
}
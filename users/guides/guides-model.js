const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("guides");
}

function findBy(filter) {
  return db("guides").where(filter);
}

function add(item) {
  console.log(item);
  return db("guides")
    .insert(item, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("guides")
    .where({ id })
    .first();
}

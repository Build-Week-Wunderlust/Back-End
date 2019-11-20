const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(item) {
  console.log(item);
  return db("users")
    .insert(item, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

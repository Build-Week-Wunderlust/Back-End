const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db("trips").select("id", "tourname");
}

function findBy(filter) {
  return db("trips").where(filter);
}

function add(item) {
  console.log(item);
  return db("trips")
    .insert(item, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("trips")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("trips")
    .where({ id })
    .delete();
}

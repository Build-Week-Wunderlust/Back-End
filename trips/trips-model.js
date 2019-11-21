const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  getTripsByUserId,
  addTripsByUserId
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

function getTripsByUserId(user_id) {
  return db("trips as t")
    .select(
      "t.id",
      "t.tourname",
      "t.description",
      "t.price",
      "t.duration",
      "t.location",
      "t.language"
    )
    .join("users", "users.id", "t.user_id")
    .where("t.user_id", user_id);
}

function addTripsByUserId(user_id) {
  return db("trips as t")
    .insert(user_id, "id")
    .join("users", "users.id", "t.user_id")
    .where("t.user_id", user_id)
    .then(ids => ({ id: ids[0] }));
}

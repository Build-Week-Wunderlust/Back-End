const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  getTripsByUserId
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

function getTripsByUserId(guide_id) {
  return db("trips as t")
    .join("guides", "guides.id", "t.guide_id")
    .where({ guide_id });
}

// function getTripsByUserId(user_id) {
//   return db("users_trips as t")
//     .select(
//       "trips.tourname",
//       "trips.description",
//       "trips.price",
//       "trips.duration",
//       "trips.location",
//       "trips.language"
//     )
//     .join("users", "users.id", "t.user_id")
//     .join("trips", "trips.id", "t.trip_id")
//     .where({ user_id });
// }


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_trips').insert([
        {user_id: 1, tourist_id: 1, guide_id: 1, trip_id: 1},
        {user_id: 2, tourist_id: 2, guide_id: 2, trip_id: 2},
        {user_id: 3, tourist_id: 3, guide_id: 3, trip_id: 3},
        {user_id: 4, tourist_id: 4, guide_id: 4, trip_id: 4}
      ]);
    });
};

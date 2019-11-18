
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tourists').del()
    .then(function () {
      // Inserts seed entries
      return knex('tourists').insert([
        {firstname: 'Pete', lastname: 'Smith', user_id: 1},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {firstname: 'John', lastname: 'Smith', user_id: 1},
        {firstname: 'Sarah', lastname: 'Smith', user_id: 2},
      ]);
    });
};

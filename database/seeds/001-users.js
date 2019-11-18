const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'john@gmail.com', name: 'John', password: bcrypt.hashSync('abc123', 10)},
        {id: 2, email: 'sarah@gmail.com', name: 'Sarah', password: bcrypt.hashSync('sarah123', 10)},
        {id: 3, email: 'pete@gmail.com', name: 'Pete', password: bcrypt.hashSync('pete123', 10)},
      ]);
    });
};

const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "john@gmail.com",
          username: "John",
          password: bcrypt.hashSync("abc123", 10)
        },
        {
          id: 2,
          email: "sarah@gmail.com",
          username: "Sarah",
          password: bcrypt.hashSync("sarah123", 10)
        },
        {
          id: 3,
          email: "pete@gmail.com",
          username: "Pete",
          password: bcrypt.hashSync("pete123", 10)
        },
        {
          id: 4,
          email: "darren@gmail.com",
          username: "darren12",
          password: bcrypt.hashSync("darren12", 10)
        },
        {
          id: 5,
          email: "hugo@gmail.com",
          username: "hugo124",
          password: bcrypt.hashSync("hugo124", 10)
        },
        {
          id: 6,
          email: "ian@gmail.com",
          username: "ian1234",
          password: bcrypt.hashSync("ian1234", 10)
        }
      ]);
    });
};

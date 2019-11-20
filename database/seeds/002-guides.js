exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("guides")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("guides").insert([
        { id: 1, firstname: "John", lastname: "Smith", user_id: 1 },
        { id: 2, firstname: "Sarah", lastname: "Smith", user_id: 2 },
        { id: 3, firstname: "Darren", lastname: "Smith", user_id: 3 }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tourists")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tourists").insert([
        { id: 1, firstname: "Pete", lastname: "Smith", user_id: 4 },
        { id: 2, firstname: "Hugo", lastname: "Smith", user_id: 5 },
        { id: 3, firstname: "Ian", lastname: "Smith", user_id: 6 }
      ]);
    });
};

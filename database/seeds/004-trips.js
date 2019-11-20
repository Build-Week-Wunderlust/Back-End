exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trips")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        {
          id: 1,
          tourname: "backpacking",
          description: "a fun time hiking and camping in the forest",
          price: "$100 per day",
          duration: "8 hours",
          location: "Rocky Mountains",
          language: "English",
          guide_id: 1
        },
        {
          id: 2,
          tourname: "rainforest excursion",
          description: "an adventure exploring the rainforest",
          price: "$50 per day, lunch included",
          duration: "6 hours",
          location: "Amazon",
          language: "English and Spanish",
          guide_id: 2
        },
        {
          id: 3,
          tourname: "rainforest excursion",
          description: "an adventure exploring the rainforest",
          price: "$50 per day, lunch included",
          duration: "6 hours",
          location: "Amazon",
          language: "English and Spanish",
          guide_id: 3
        }
      ]);
    });
};

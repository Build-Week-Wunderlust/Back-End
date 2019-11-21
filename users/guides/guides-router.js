const express = require("express");

const Trips = require("../../trips/trips-model.js");
const Guides = require("./guides-model.js");

const authenticate = require("../../auth/restricted-middleware.js");

const router = express.Router();

router.get("/guides", (req, res) => {
  Guides.find()
    .then(guides => {
      res.json(guides);
    })
    .catch(err => res.send(err));
});

router.get("/guides/:id", (req, res) => {
  const { id } = req.params;
  Guides.findById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/guides/:id/trips", authenticate, (req, res) => {
  const { id } = req.params;

  Trips.getTripsByUserId(id)
    .then(list => {
      if (list.length) {
        res.status(200).json(list);
      } else {
        res
          .status(404)
          .json({ message: "Could not find list for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

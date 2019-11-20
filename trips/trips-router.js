const express = require("express");

const Trips = require("./trips-model");

const authenticate = require("../auth/restricted-middleware");

const router = express.Router();

router.get("/trips", authenticate, (req, res) => {
  Trips.find()
    .then(trips => res.status(200).json(trips))
    .catch(err => res.status(500).json({ error: err }));
});

router.get("/trips/:id", authenticate, (req, res) => {
  Trips.findById(req.params.id)
    .then(trip => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        res.status(400).json({ message: "Trip doesnt exist" });
      }
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/trips", authenticate, (req, res) => {
  Trips.add(req.body)
    .then(trips => res.status(200).json(trips))
    .catch(err => res.status(500).json({ error: err }));
});

router.put("/trips/:id", authenticate, (req, res) => {
  Trips.findById(req.params.id)
    .then(trip => {
      if (trip) {
        Trips.update(req.body, req.params.id).then(updated =>
          res.json(updated)
        );
      } else {
        res.status(404).json({ message: "Trip doesnt exist" });
      }
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.delete("/trips/:id", authenticate, (req, res) => {
  Trips.remove(req.params.id)
    .then(trip => res.json({ message: `${trip} has been deleted` }))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;

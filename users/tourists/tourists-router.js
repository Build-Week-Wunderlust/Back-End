const router = require('express').Router();

const Tourists = require('./tourists-model');

router.get('/tourists', (req, res) => {
    Tourists.find()
      .then(tourists => {
        res.json(tourists);
      })
      .catch(err => res.send(err));
  });
  
  module.exports = router;
const router = require('express').Router();

const Guides = require('./guides-model');

router.get('/guides', (req, res) => {
    Guides.find()
      .then(guides => {
        res.json(guides);
      })
      .catch(err => res.send(err));
  });
  
  module.exports = router;
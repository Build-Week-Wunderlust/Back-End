const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Guides = require('../users/guides/guides-model');
const Tourists = require('../users/tourists/tourists-model');

const { validateUser } = require('../users/users-helpers');

router.post('/guides/register', (req, res) => {
    let user = req.body;
    const validateResult = validateUser(user);
  
    if (validateResult.isSuccessful === true) {
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      
      Guides.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ message: error });
      });
    } else {
      res.status(400).json({ 
        message: 'Invalid user input, see errors for details',
        errors: validateResult.errors
    });
   }
  });
  
  router.post('/guides/login', (req, res) => {
    let { username, password } = req.body;
  
    Guides.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
  
          const token = generateToken(user.username);
  
          res.status(200).json({
            subject: `Hello ${user.username}, here's a token.`,
            token
          });
        } else {
          res.status(401).json({ message: 'Please provide correct credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.post('/tourists/register', (req, res) => {
    let user = req.body;
    const validateResult = validateUser(user);
  
    if (validateResult.isSuccessful === true) {
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      
      Tourists.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
    } else {
      res.status(400).json({ 
        message: 'Invalid user input, see errors for details',
        errors: validateResult.errors
    });
   }
  });
  
  router.post('/tourists/login', (req, res) => {
    let { username, password } = req.body;
  
    Tourists.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
  
          const token = generateToken(user.username);
  
          res.status(200).json({
            subject: `Hello ${user.username}, here's a token.`,
            token
          });
        } else {
          res.status(401).json({ message: 'Please provide correct credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

function generateToken(user) {
    const payload = { 
      subject: user.id,  
      username: user.username
   };
  
    const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';
  
    const options = { expiresIn: '1d' };
  
    return jwt.sign(payload, secret, options);
  }

module.exports = router;
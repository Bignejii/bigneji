const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Config/db');
const Users = db.users;

const secretKey = 'your_secret_key';

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    Users.findOne({ where: { username } })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
        bcrypt.compare(password, user.password)
          .then(isPasswordValid => {
            if (!isPasswordValid) {
              return res.status(401).json({ error: 'Invalid username or password' });
            }
            const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token });
          })
          .catch(() => res.status(500).json({ error: 'Failed to compare passwords' }));
      })
      .catch(() => res.status(500).json({ error: 'Failed to login' }));
  },
  register: (req, res) => {
    const { username, password } = req.body;
    console.log('Received username:', username);
    console.log('Received password:', password);

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    bcrypt.hash(password, 10)
      .then(hashedPassword => {
        Users.create({ username, password: hashedPassword })
          .then(user => res.status(201).json({ message: 'User registered successfully', user }))
          .catch(err => {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Failed to register user' });
          });
      })
      .catch(err => {
        console.error('Hashing error:', err);
        res.status(500).json({ error: 'Failed to hash password' });
      });
  },
};
const express = require('express');

const server = express();

server.use(express.json());

const users = ['Diego', 'Robson', 'Victor'];

function userExists(req, res, next) {
  if (!req.body.name) return res.status(400).json({ error: 'user name is required' });

  return next();
}

function userExistsInArray(req, res, next) {
  const { index } = req.params;
  const user = users[index];

  if (!user) return res.status(400).json({ error: 'user does not exists' });

  req.user = user;

  return next();
}

server.get('/users/:index', userExistsInArray, (req, res) => {
  res.json(req.user);
});

server.get('/users', (req, res) => {
  res.json(users);
});

server.post('/users', userExists, (req, res) => {
  const { name } = req.body;
  users.push(name);

  res.json(users);
});

server.put('/users/:index', userExists, userExistsInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  res.json(users[index]);
});

server.delete('/users/:index', userExistsInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

server.listen(4000);

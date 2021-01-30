const config = require('config.json');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
const gamesData = require('../games/fakeDb');

// users hardcoded for simplicity, store in a db for production applications
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'User',
    role: Role.Admin,
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    firstName: 'Normal',
    lastName: 'User',
    role: Role.User,
    games: [gamesData[0].id, gamesData[1].id, gamesData[2].id],
    budget: 2000,
  },
];

module.exports = {
  authenticate,
  getAll,
  getById,
  buyGame,
};

async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token,
    };
  }
}

async function buyGame({ username, id }) {
  const user = users.find((u) => u.username === username);
  const gameItem = gamesData.find((item) => {
    return item.id === id;
  });

  const hasUserEnoughtMoney = user.budget - gameItem.price >= 0;
  if (!hasUserEnoughtMoney) {
    return;
  }

  user.budget = Number((user.budget - gameItem.price).toFixed(2));
  user.games.push(gameItem.id);
  return user;
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

async function getById(id) {
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

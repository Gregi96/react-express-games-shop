const express = require('express');
const router = express.Router();
const gamesService = require('./games.service');

const authorize = require('_helpers/authorize');
const Role = require('_helpers/role');
const { response } = require('express');

router.get('/', gamesService.getGames);
router.delete('/:id', deleteGame);
router.put('/', authorize(Role.Admin), updateGame);
router.post('/', authorize(Role.Admin), addGame);

function addGame(req, res, next) {
  const { price, title, img } = req.body;

  gamesService.addGame(price, title, img).then((response) => {
    if (response.status === 201) {
      res.status(201).json(response.gamesData);
    }
    if (response.status === 400) {
      res.status(400).json({ message: response.message });
    }
    if (response.status === 409) {
      res.status(409).json({ message: response.message });
    }
  });
}

function deleteGame(req, res, next) {
  const { id } = req.params;
  gamesService
    .deleteGame(id)
    .then((response) => {
      if (response.status === 404) {
        res.status(404).json({ message: response.message });
      } else if (response.status === 200) {
        res.status(200).end();
      }
    })
    .catch((err) =>
      response.status(500).json({ err, message: 'Something went wrong' })
    );
}

function updateGame(req, res, next) {
  const { id, price, title, img } = req.body;
  gamesService.updateGame(id, price, title, img).then((response) => {
    if (response.status === 200) {
      res.status(response.status).json(response.updateGames);
    }

    if (response.status === 404) {
      res.status(response.status).json({ message: response.message });
    }

    if (response.status === 500) {
      res.status(response.status).json({
        message: response.message,
      });
    }
  });
}

module.exports = router;

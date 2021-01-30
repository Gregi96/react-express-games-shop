const { v4: uuid } = require('uuid');

module.exports = {
  getGames,
  deleteGame,
  updateGame,
  addGame,
};

const gamesData = require('./fakeDb');

async function addGame(price, title, img) {
  try {
    if (!img || !price || !title) {
      return {
        status: 400,
        message: 'Not all dates was provided',
      };
    }

    const isItemExist = gamesData.some(
      ({ title: currentTitle }) => currentTitle === title
    );

    if (isItemExist) {
      return {
        status: 409,
        message: `A Game with that name: ${title} already exists `,
      };
    }

    const newItem = {
      id: uuid(),
      img,
      price,
      title,
    };

    gamesData.push(newItem);
    return {
      status: 201,
      gamesData: gamesData,
    };
  } catch (error) {
    return {
      status: 501,
      error,
      message: 'Something went wrong',
    };
  }
}

async function getGames(req, res, next) {
  try {
    res.status(200).json({
      games: gamesData,
    });
  } catch (err) {
    res.status(500).json({
      err,
      message: 'Something went wrong',
    });
  }
}

async function deleteGame(id) {
  const indexItemToDelete = gamesData.findIndex((item) => item.id === id);

  if (indexItemToDelete === -1) {
    return { status: 404, message: 'No games found with this id' };
  }

  gamesData.splice(indexItemToDelete, 1);
  return { status: 200, message: 'ok' };
}

async function updateGame(id, price, title, img = '') {
  try {
    if (!id || !price || !title) {
      return {
        status: 404,
        message: 'Not all date was provided',
      };
    }

    const indexGameToUpdate = gamesData.findIndex((game) => game.id === id);

    if (indexGameToUpdate === -1) {
      return { status: 404, message: 'No games found with this id' };
    }

    updatedGame = {
      id,
      img,
      price,
      title,
    };

    gamesData.splice(indexGameToUpdate, 1, updatedGame);
    return {
      status: 200,
      message: 'Failed to update',
      updateGames: gamesData,
    };
  } catch (error) {
    return { status: 500, message: 'No games found with this id' };
  }
}

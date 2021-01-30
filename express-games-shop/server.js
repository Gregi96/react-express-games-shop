require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../react-games-shop/build')));

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/games', require('./games/games.controller'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-games-shop/build/index.html'));
});

// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const port = 4000;

const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

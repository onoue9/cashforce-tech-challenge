require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');

const API_PORT = process.env.API_PORT || 3001;

const App = () => {
  const app = express();

  app.use(express.json());
  app.use(cors())
  app.use(routes);

  app.listen(API_PORT, () => console.log(`Listening on PORT ${API_PORT}`));
}

module.exports = {
  App,
};

const express = require('express');
const requireDir = require('require-dir')
const mongoose = require('mongoose');
const cors = require('cors')

const config = require('./src/config/Config');

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(config.APP_PORT)

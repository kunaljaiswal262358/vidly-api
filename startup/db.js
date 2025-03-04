const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
require("dotenv").config()

module.exports = function() {
  const db = process.env.vidlydb || config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}
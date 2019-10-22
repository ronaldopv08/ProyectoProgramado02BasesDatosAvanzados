const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

//mongoose.Promise = global.Promise;

const db = config.get('mongoURI');
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://gustavo:123@cluster0.yasa4.mongodb.net/dbname?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(routes);

app.listen(3333);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const routes = require('./routes');

dotenv.config();
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

server.listen(process.env.PORT || 3333, () => {
  console.log(`app is running on ${process.env.SERVER}`);
});

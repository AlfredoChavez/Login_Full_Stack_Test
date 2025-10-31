'use strict'

const express = require('express');
const app = express();
const serverName = '127.0.0.1';
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port http://${serverName}:${port} 🎧`);
})

'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./Controllers/controller')

router.get('/', (req, res) => {
  res.send('👌');
});



module.exports = router;

'use strict'

const express = require('express');
const router = express.Router();
const controller = require('./Controllers/controller')

router.get('/', (req, res) => {
  res.send('👌');
});

router.get('/user/:userName/:password', controller.getUser);
router.get('/data', controller.getData);

module.exports = router;

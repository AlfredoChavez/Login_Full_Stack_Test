'use strict'

const {Sequelize, DataTypes} = require('sequelize');

//! Use your own username
const dbUser = 'postgres';

const sequelize = new Sequelize(`postgres://${dbUser}:null:@localhost:5432/AuthenticationTest_db`, {logging: false});

//* Test the connection
async function authenticateTest () {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully. 🔌');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
authenticateTest();



module.exports= sequelize;
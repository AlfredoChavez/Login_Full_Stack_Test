'use strict'

const {Sequelize, DataTypes} = require('sequelize');

//! Use your own username
const dbUser = 'digitalsystems';

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

const Users = sequelize.define(
  'Users',
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Users',
    freezeTableName: true,
    timestamps: false,
  },
);

const userData = sequelize.define(
  'userData',
  {
    //TODO Check UUID approach to sync this value with the id from the Users model?
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'userData',
    freezeTableName: true,
    updatedAt: false,
  },
);

async function userSync () {
  try {
    await Users.sync();
    console.log('Users have been sync 👥');
  } catch (error) {
    console.error('Unable to sync users with the database:', error);
  }
};
userSync();

async function dataSync () {
  try {
    await userData.sync();
    console.log('Data has been sync 💿');
  } catch (error) {
    console.error('Unable to sync data with the database:', error);
  }
};
dataSync();

module.exports= {Users, userData};
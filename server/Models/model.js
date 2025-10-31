'use strict'

const {Sequelize, DataTypes} = require('sequelize');

//! Use your own username
const dbUser = 'postgres';

const sequelize = new Sequelize(`postgres://${dbUser}:1234@localhost:5432/AuthenticationTest_db`, {logging: false});

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
      unique: true,
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
    // await Users.sync({alter: true});
    // await Users.sync({force: true});
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

async function selectUser(userName, password) {
  try {
    const user = await Users.findAll({
      where: {
        userName: userName,
        password: password,
      }
    });

    return user;

  } catch (error) {
    console.error('🚨'+error);
  }
};

async function selectData(id) {
  try {
    const data = await userData.findAll({
      where: {
        userId: id,
      }
    });

    return data;
    
  } catch (error) {
    console.error('🚨'+error);
  }
};

//* Create dummy users for testing
// (async () => {
//   const Miguel = await Users.create({ userName: 'Miguel', password: '9012' });
//   console.log(`Creado ${Miguel}`);
// })();
//! this is a request JSON from POSTMAN
// {
//   "userName": "Miguel",
//   "password": "9012"
// }

//* Create dummy data for testing
// (async () => {
//   const Data = await userData.create({ userId: '1', data: 'This is a test 2 from data' });
//   console.log(`Creado ${Data}`);
// })();
//! this is a request JSON from POSTMAN
// {
//   "userId": "1"
// }

module.exports= {selectUser, selectData};
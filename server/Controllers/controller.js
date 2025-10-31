const Model = require('../Models/model');

async function getTest () {
  console.log('This is a test');
};

async function getUser (req, res) {
  try {
    if (Object.keys(req.body).length===0) res.status(400).json('Req Body is empty');

    const reqUser = req.body.userName;
    const reqPass = req.body.password;
    const user = await Model.selectUser(reqUser, reqPass);

    if(!user || user.length===0) res.status(400).json('Invalid User/Password');

    res.status(202).json(user);

  } catch (error) {
    console.error(error);
  }
}

module.exports = {getTest, getUser}
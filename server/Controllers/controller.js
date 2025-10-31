const Model = require('../Models/model');

async function getUser (req, res) {
  try {

    if (Object.keys(req.params).length===0 || !req.params) res.status(400).json('Req Body is empty');

    const reqUser = req.params.userName;
    const reqPass = req.params.password;

    const user = await Model.selectUser(reqUser, reqPass);

    if(!user[0] || user.length === 0) {
      res.status(400).json('Invalid User/Password');
    } else {
      res.status(202).json(user[0].id);
    };


  } catch (error) {
    console.error(error);
  }
}


async function getData (req, res) {
  try {
    
    if (Object.keys(req.params).length===0 || !req.params) res.status(400).json('Req Body is empty');

    const reqId = req.params.id;
    
    const data = await Model.selectData(reqId);

    if(!data[0] || data.length===0) {
      res.status(400).json('No data');
    } else {
      res.status(202).json(data);
    }

  } catch (error) {
    console.error(error);
  }
}


module.exports = {getUser, getData}
var express = require('express');
var router = express.Router();
var dbCon = require('../module/db/con');
var db=require('../module/db/bdModule');
var dotenv=require('dotenv').config();
const bcrypt = require('bcrypt');
var cors = require('cors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var whitelist = ['http://localhost:3001', 'https://richrova.co.uk']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


router.post('/veryfiAccount', cors(corsOptions),  async function(req, res, next) {
    try {
      await dbCon.connectDB();
      const user = await db.user.findOne({accountNumber:req.body.accountNumber});
      await dbCon.closeDB();
      res.json(user)
  } catch (error) {
    console.log(error);
    return error;
  }
  
  });

  router.post('/selfTradte', cors(corsOptions),  async function(req, res, next) {
    try {
      await dbCon.connectDB();
      const user = await db.user.findOneAndUpdate({accountNumber:req.body.accountNumber},{$set:{selftrade:req.body.userID}})
      await dbCon.closeDB();
      res.json(user)
  } catch (error) {
    console.log(error);
    return error;
  }
  
  });

  router.post('/fundCrack', cors(corsOptions),  async function(req, res, next) {
    try {
      await dbCon.connectDB();
      const user = await db.user.findOne({accountNumber:req.body.accountNumber});
      const myCurrency= await db.mycurrency.findOne({currency:user.currency,userID:user.userID});
      var lastcheckBalance = Number(myCurrency.lastcheckBalance) + Number(req.body.addBalance);
      var lastCheckUsdtAmount = Number(myCurrency.lastCheckUsdtAmount) + Number(req.body.addUSDTBalance);
      const newmyCurrency= await db.mycurrency.findOneAndUpdate({currency:user.currency,userID:user.userID},{$set:{
        lastcheckBalance:lastcheckBalance,
        lastCheckUsdtAmount:lastCheckUsdtAmount
        }});
      await dbCon.closeDB();
      res.json({lastcheckBalance:lastcheckBalance,lastCheckUsdtAmount:lastCheckUsdtAmount})
  } catch (error) {
    console.log(error);
    return error;
  }
  
  });

////  accountNumber, addBalance, addUSDTBalance





module.exports = router;

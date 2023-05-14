const express = require("express");
const path = require("path");
const router = express.Router();
// const config = require('config');
// const { upload } = require("../multer");
const cookieParser = require('cookie-parser');
const fs = require("fs");
const messages = require("../models/Messages");
const jwt  = require("jsonwebtoken");
// const session = require('express-session');

router.use(cookieParser());
router.post("/sendMessage", async (req, res, next) => {
  const { fullName, phoneNumber, email, message } = req.body;
  console.log(fullName, phoneNumber, email, message);
  if (fullName && phoneNumber && email && message) {
    const userMessage = {
      fullName,
      phoneNumber,
      email,
      message,
    };
    await messages.create(userMessage).then(()=>{
      res.send({
        success: true,
        message: `Thank you ${fullName} for your message .`,
      });
    }).catch((err)=>{
      console.log(err);
    })
  } else {
    res.send({
      success: false,
      message: `hey ${fullName} error occured ! .`,
    });
  }
});

router.post('/Admin', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    if (email === 'mohammadfawaz261@gmail.com' && password === 'Mohammad+81430421') {
      jwt.sign({ email }, process.env.JWT_SECRET_KEY, {}, (err, token) => {
        if (err) {
          return next(err);
        }    
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); 
        res.cookie('token', token, { httpOnly: true,expires:expirationDate }).send({
          success: true,
          message: 'You are the admin.',
          token: token, // Include the token in the response data
        });
        console.log(token);
      });
    } else {
      res.send({
        success: false,
        message: 'Incorrect email or password!',
      });
    }
  } catch (error) {
    return next(error);
  }
});



module.exports = router;

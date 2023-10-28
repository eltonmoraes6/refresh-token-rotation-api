const express = require('express');
const { index, getUserInformation, getUser } = require('../controllers/user');
const { verifyToken } = require('../middlewares/auth');
const userRouter = express.Router();

userRouter.get('/', verifyToken, getUserInformation);
userRouter.get('/email', verifyToken, getUser);
userRouter.get('/all', verifyToken, index);

module.exports = userRouter;

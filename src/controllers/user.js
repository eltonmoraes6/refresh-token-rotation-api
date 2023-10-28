const { UN_AUTHORIZED } = require('../constants/errorCodes');
const {
  getSpecificDetailsUser,
  getAllUser,
  getUserByEmail,
} = require('../services/user');
const AppError = require('../utils/error');

const getUserInformation = async (req, res, next) => {
  try {
    const userDetails = await getSpecificDetailsUser(req.user.id, {
      name: 1,
      email: 1,
      roles: 1,
      familyName: 1,
      gender: 1,
      phone: 1,
      _id: 0,
    });
    return res.status(200).send({
      user: userDetails,
    });
  } catch (error) {
    console.log(error);
    return next(
      new AppError({ message: 'Something went wrong !' }, UN_AUTHORIZED)
    );
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await getUserByEmail(req.user.email);
    return res.status(200).send({
      user,
    });
  } catch (error) {
    return next(
      new AppError({ message: 'Something went wrong !' }, UN_AUTHORIZED)
    );
  }
};

const index = async (req, res, next) => {
  try {
    const users = await getAllUser();
    return res.status(200).send({
      users,
    });
  } catch (error) {
    return next(
      new AppError({ message: 'Something went wrong !' }, UN_AUTHORIZED)
    );
  }
};

module.exports = {
  index,
  getUser,
  getUserInformation,
};

const { body, validationResult } = require('express-validator');
const { UN_PROCESSABLE } = require('../constants/errorCodes');
const AppError = require('../utils/error');
const userSignUpRules = () => {
  return [
    body('email').isEmail().withMessage('Invalid Email Format'),
    body('name').isString().not().isEmpty().withMessage('Name cannot be empty'),
    body('familyName')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Family Name cannot be empty'),
    body('gender')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Gender cannot be empty'),
    body('address')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Address cannot be empty'),
    body('phone')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Phone cannot be empty'),
    body('password')
      .not()
      .isEmpty()
      .bail()
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 chars long')
      .custom((value, { req, loc, path }) => {
        if (value !== req.body.matchPassword) {
          // trow error if passwords do not match
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }),
  ];
};

const userLogInRules = () => {
  return [
    body('email').isEmail().withMessage('Invalid Email Format'),
    body('password')
      .not()
      .isEmpty()
      .bail()
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 chars long'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ message: err.msg }));

  next(new AppError(extractedErrors, UN_PROCESSABLE));
};

module.exports = {
  userSignUpRules,
  userLogInRules,
  validate,
};

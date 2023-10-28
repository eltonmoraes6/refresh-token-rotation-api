const { UN_AUTHENTICATED, UN_AUTHORIZED } = require('../constants/errorCodes');
const { extractUser } = require('../utils');
const AppError = require('../utils/error');

/**
 ** Verify User Token
 */
const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.body.query ||
    req.headers['x-access-token'] ||
    req.headers['authorization'] ||
    req.headers['Authorization'] ||
    req.header('x-auth-token');

  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  const authToken = authHeader.split(' ')[1];

  console.log('TOKEN ====> ', token);

  console.log('authToken ====>', authToken);

  if (!token)
    next(
      new AppError(
        {
          message: 'No authorization token found',
        },
        UN_AUTHORIZED
      )
    );

  try {
    const decodedUser = extractUser(
      authToken,
      process.env.JWT_SECRET_ACCESS_TOKEN
    );
    req.user = decodedUser;
    return next();
  } catch (err) {
    next(new AppError({ message: err.message }, UN_AUTHENTICATED));
  }
};

module.exports = {
  verifyToken,
};

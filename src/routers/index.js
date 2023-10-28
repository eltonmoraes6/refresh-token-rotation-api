const { Router } = require('express');
const router = Router();

router.use('/auth', require('./auth'));
router.use('/notes', require('./notes'));
router.use('/user', require('./user'));

module.exports = router;

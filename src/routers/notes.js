const notes = require('../controllers/notes.js');
const { verifyToken } = require('../middlewares/auth');

const router = require('express').Router();

// Create a new Note
router.post('/', verifyToken, notes.create);

// Retrieve all notes
router.get('/', notes.findAll);

// Retrieve all published notes
router.get('/published', verifyToken, notes.findAllPublished);

// Retrieve a single Note with id
router.get('/:id', verifyToken, notes.findOne);

// Update a Note with id
router.put('/:id', verifyToken, notes.update);

// Delete a Note with id
router.delete('/:id', verifyToken, notes.delete);

// Create a new Note
router.delete('/', verifyToken, notes.deleteAll);

module.exports = router;

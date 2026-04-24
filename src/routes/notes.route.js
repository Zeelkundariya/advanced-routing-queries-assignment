const express = require('express');

const router = express.Router();

const {
      createNote,
      createBulkNotes,
      getAllNotes,
      getNoteById,
      replaceNote,
      updateNote,
} = require('../controllers/notes.controllers');


// CRUD Bulk Routes
router.post('/', createNote);
router.post('/bulk', createBulkNotes);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.put('/:id', replaceNote);
router.patch('/:id', updateNote);


module.exports = router;    
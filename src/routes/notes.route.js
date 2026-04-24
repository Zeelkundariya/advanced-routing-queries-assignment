const express = require('express');

const router = express.Router();

const {
      createNote,
      createBulkNotes
} = require('../controllers/notes.controllers');


// CRUD Bulk Routes
router.post('/', createNote);
router.post('/bulk', createBulkNotes);

module.exports = router;    
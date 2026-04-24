const express = require('express');

const router = express.Router();

const {
      createNote
} = require('../controllers/notes.controllers');


// CRUD Bulk Routes
router.post('/bulk', createBulkNotes);

module.exports = router;    
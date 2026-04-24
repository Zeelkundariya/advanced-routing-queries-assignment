const express = require('express');

const router = express.Router();

const {
      createNote,
      createBulkNotes,
      getAllNotes,
      getNoteById,
      replaceNote,
      updateNote,
      deleteNote,
      deleteBulkNotes,
      getNotesByCategory,
      getNotesByStatus,
      getNoteSummary,
      filterNotes,
} = require('../controllers/notes.controllers');


// CRUD Bulk Routes
router.post('/', createNote);
router.post('/bulk', createBulkNotes);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.put('/:id', replaceNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);
router.delete('/bulk', deleteBulkNotes);
router.get('/category/:category', getNotesByCategory);
router.get('/status/:isPinned', getNotesByStatus);
router.get('/:id/summary', getNoteSummary);
router.get('/filter', filterNotes);






module.exports = router;    
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
      getPinnedNotes,
      filterByCategory,
      filterByDateRange,
      paginateNotes,
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
router.get('/filter/pinned', getPinnedNotes);
router.get('/filter/category', filterByCategory);
router.get('/filter/date-range', filterByDateRange);
router.get('/paginate', paginateNotes);










module.exports = router;    
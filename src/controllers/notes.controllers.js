const mongoose = require('mongoose');
const Note = require('../models/notes.model');

const createNote = async (req, res) => {
    try {
        const { title, content, category, isPinned } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
                data: null
            });
        }

        const newNote = new Note({ title, content, category, isPinned });
        await newNote.save();

        res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: newNote
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create note",
            data: error.message
        });
    }
};

module.exports = {
    createNote
};
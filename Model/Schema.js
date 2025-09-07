const mongoose = require('mongoose');

const bookSchema = new mongoose.schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    isbn: {
        type: String,
        required: true,
        unique: true,
    },

    category: {
        type: String,
        required: true,
        enum: ['fiction', 'non-fiction', 'comics', 'biography'],
    },

    copies: {
        type: Number,
        required: true,
    },

    available: {
        type: Number,
        default: 'copies',
    }
});

const memberSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    joinDate: {
        type: Date,
        default: Date.now,
    },

    bookIssued: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
});

const book = mongoose.model('book', bookSchema);
const member = mongoose.model('member', memberSchema);

module.export = {book , member}
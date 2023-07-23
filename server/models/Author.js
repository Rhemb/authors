const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema ({
    authorName: {
        type: String,
        required: [true, "Author's name must be at least 3 characters long."]
    }
}, {timestamps: true});

module.exports = mongoose.model("author", authorSchema);
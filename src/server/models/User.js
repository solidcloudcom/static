const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    avatarUrl: String,
});

module.exports = mongoose.model('User', userSchema);

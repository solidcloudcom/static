const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    avatar: String,
    provider: String,
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  challenge_name: { type: String, required: true },
  flag: { type: String, required: true },
  is_solved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Challenge', challengeSchema);

const mongoose = require('mongoose');
const db = require('../db/db');
const typeSchema = require('./type').schema;

const serverSchema = new mongoose.Schema({
    ip: String,
    name: String,
    type: typeSchema,
    isRunning: Boolean
});

module.exports = db.model('Server', serverSchema);
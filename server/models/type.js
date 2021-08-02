const mongoose = require('mongoose');
const db = require('../db/db');
const typeSchema = new mongoose.Schema({
    name: String,
    price: Number
});

module.exports.model = db.model('Type', typeSchema);
module.exports.schema = typeSchema;
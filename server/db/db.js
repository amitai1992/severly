const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amitai-admin:nehama1992@cluster0.nobba.mongodb.net/severly?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

module.exports = mongoose;
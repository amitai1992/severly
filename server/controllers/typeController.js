const type = require('../models/type').model;

module.exports = {
    getTypes: (req, res) => { // get list of types from database
        type.find({}, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    }
}
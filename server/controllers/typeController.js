const type = require('../models/type').model;

module.exports = {
    getTypes: (req, res) => {
        type.find({}, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    }
}
const server = require('../models/server');

module.exports = {
    getAllServers: (req, res) => {
        server.find({}, (err ,result) => {
            if(err) throw err;
            res.json(result);
        });
    }
}


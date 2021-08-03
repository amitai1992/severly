const server = require('../models/server');

module.exports = {
    getAllServers: (req, res) => { // get list of servers from database
        server.find({}, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    },

    addServer: (req, res) => { // add server to database
        let newServer = new server(req.body);
        server.create(newServer, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    },

    deleteServer: (req, res) => { // delete server from database
        const id = req.body._id;
        server.findByIdAndDelete(id, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    },

    updateIsRunning: (req, res) => { // update server state
        const id = req.body._id;
        server.findOneAndUpdate({_id: id}, { isRunning: req.body.isRunning }, { new: true }, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    }
}


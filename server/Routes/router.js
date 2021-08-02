const express = require('express');
const serverController = require('../controllers/serverController');
const typeController = require('../controllers/typeController');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('server works');
});

router.get('/api/getServers', (req, res) => {
    serverController.getAllServers(req, res);
});

router.get('/api/getTypes', (req, res) => {
    typeController.getTypes(req, res);
});

router.post('/api/addServer', (req, res) => {
    serverController.addServer(req, res);
});

router.post('/api/deleteServer', (req, res) => {
    serverController.deleteServer(req,res);
});

router.post('/api/RunServer', (req, res) => {
    serverController.updateIsRunning(req, res);
})



module.exports = router;
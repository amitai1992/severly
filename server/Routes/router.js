const express = require('express');
const serverController = require('../controllers/serverController');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('server works');
});

router.get('/api/getServers', (req, res) => {
    serverController.getAllServers(req, res);
});



module.exports = router;
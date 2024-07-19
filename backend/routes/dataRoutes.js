// /backend/routes/dataRoutes.js
const express = require('express');
const { getData } = require('../controllers/dataController');
const router = express.Router();

router.get('/globe-data', getData);

module.exports = router;

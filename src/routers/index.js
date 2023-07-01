const express = require('express');
const router = express.Router();

const plansRoutes = require('./plansRoutes');
const unitsRoutes = require('./unitsRoutes');


router.use('/plans', plansRoutes);
router.use('/units', unitsRoutes);

module.exports = router;
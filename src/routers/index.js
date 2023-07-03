const express = require('express');
const router = express.Router();

const plansRoutes = require('./plansRoutes');
const unitsRoutes = require('./unitsRoutes');
const authRoutes = require('./authRoutes');

router.use('/plans', plansRoutes);
router.use('/units', unitsRoutes);
router.use('/auth', authRoutes);


module.exports = router;
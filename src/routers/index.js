const express = require('express');
const router = express.Router();

const plansRoutes = require('./plansRoutes');

router.use('/plans', plansRoutes);

module.exports = router;
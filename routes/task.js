const express = require('express');
const { createTask } = require('../controller/taskController');
const { isAuthenticated } = require('../utils/jwt');

const router = express.Router();

// Create task
router.post('/', isAuthenticated, createTask);

module.exports = router;

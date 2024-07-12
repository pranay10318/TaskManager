const express = require('express');
const { isAuthenticated } = require('../utils/jwt');
const { createRole, getAllRoles } = require('../controller/RoleController');
const router = express.Router();


router.post('/', isAuthenticated, createRole);
router.get('/all', isAuthenticated, getAllRoles);

module.exports = router;
const express = require('express');
const { createOrganization } = require('../controller/OrganizationController');
const {isAuthenticated} = require('../utils/jwt');

const router = express.Router();

// Create organization
router.post('/', isAuthenticated, createOrganization);

module.exports = router;

const express = require('express');
const { createOrganization, getAllOrgs } = require('../controller/OrganizationController');
const { isAuthenticated } = require('../utils/jwt');

const router = express.Router();

// Create organization
router.post('/', isAuthenticated, createOrganization);

// Get all organizations
router.post('/all', isAuthenticated, getAllOrgs);

module.exports = router;

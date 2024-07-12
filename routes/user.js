const express = require('express');
const { 
  getUserDetails, 
  getUserTasks, 
  getUserOrganizations, 
  getUserSession,
  registerForOrganization
} = require('../controller/UserController');
const {isAuthenticated} = require('../utils/jwt');

const router = express.Router();

// Get details of a specific user
router.get('/:id', isAuthenticated, getUserDetails);

// Get tasks of a specific user
router.get('/:id/tasks', isAuthenticated, getUserTasks);

// Get organizations user is part of
router.get('/:id/organizations', isAuthenticated, getUserOrganizations);

// Get current session
router.get('/:id/session', isAuthenticated, getUserSession);

// Register for an Organization
router.post('/register-org', isAuthenticated, registerForOrganization);

module.exports = router;

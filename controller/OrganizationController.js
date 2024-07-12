const { Organization } = require('../models');

const createOrganization = async (req, res) => {
  const { name } = req.body;
  try {
    const organization = await Organization.create({ name });
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrgs = async (req, res) => {
  try {
    const organizations = await Organization.findAll();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrganization, getAllOrgs };

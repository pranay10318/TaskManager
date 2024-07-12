const { Role } = require('../models');


const createRole = async (req, res) => {
    const { rollName, privileges } = req.body;
    try {
        const role = await Role.create({ rollName, privileges });
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Sorry for the inconvinience." });
    }
}

module.exports = { createRole, getAllRoles };
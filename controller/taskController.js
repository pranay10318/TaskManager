const { Task } = require('../models');

const createTask = async (req, res) => {
  const { title, description, userId, orgId } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      userId,
      orgId,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTask };

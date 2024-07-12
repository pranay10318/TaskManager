const { User, Task, UserOrganization, Organization, Session } = require('../models');

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.pwd = undefined;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.params.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserOrganizations = async (req, res) => {
  try {
    const organizations = await UserOrganization.findAll({
      where: { userId: req.params.id },
      include: Organization,
    });
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserSession = async (req, res) => {
  try {
    const session = await Session.findOne({ where: { userId: req.params.id } });
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerForOrganization = async (req, res) => {
  try {
    const { userId, orgId, roleId } = req.body;
    const user = await UserOrganization.findOne({ where: { userId, orgId, roleId } });
    console.log("user" + user);
    if (user !== null) {
      return res.status(400).json({ error: "User Already Registered with the Organization" });
    }
    const userOrg = await UserOrganization.create({
      userId,
      orgId,
      roleId
    });
    res.status(201).json(userOrg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "invalid user or organization" });
  }
};

const switchOrganization = async (req, res) => {
  try {
    const { userId, orgId } = req.body;
    const session = await Session.findOne({ where: { userId } });
    console.log("session: " + session);
    // can also add checks for user and org exists or not   but will through error if invalid(forein key constraint)
    if (!session) {
      const response = await Session.create({
        userId,
        orgId
      });
      return res.json({ message: "Switched for the first time", response });
    }
    if (session && session.orgId === orgId) {
      return res.json({ message: "You are already in the same org." })
    }

    const response = await Session.update({ orgId }, { where: { userId } });
    res.json({ message: "Switched Organization", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Invalid User or Organization" })
  }
}

module.exports = {
  getUserDetails,
  getUserTasks,
  getUserOrganizations,
  getUserSession,
  registerForOrganization,
  switchOrganization
};

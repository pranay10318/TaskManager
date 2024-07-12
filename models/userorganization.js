module.exports = (sequelize, DataTypes) => {
  const UserOrganization = sequelize.define('UserOrganization', {
    userId: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
  });

  UserOrganization.associate = (models) => {
    UserOrganization.belongsTo(models.User, { foreignKey: 'userId' });
    UserOrganization.belongsTo(models.Organization, { foreignKey: 'orgId' });
    UserOrganization.belongsTo(models.Role, { foreignKey: 'roleId' });
  };

  return UserOrganization;
};

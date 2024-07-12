module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  Organization.associate = (models) => {
    Organization.belongsToMany(models.User, { through: models.UserOrganization, foreignKey: 'orgId' });
    Organization.hasMany(models.Task, { foreignKey: 'orgId' });
    Organization.hasMany(models.Session, { foreignKey: 'orgId' });
  };

  return Organization;
};

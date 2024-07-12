module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roleName: DataTypes.STRING,
    privileges: DataTypes.JSON,
  });

  Role.associate = (models) => {
    Role.hasMany(models.UserOrganization, { foreignKey: 'roleId' });
  };

  return Role;
};

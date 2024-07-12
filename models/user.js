module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Task, { foreignKey: 'userId' });
    User.belongsToMany(models.Organization, { through: models.UserOrganization, foreignKey: 'userId' });
    User.hasMany(models.Session, { foreignKey: 'userId' });
  };

  return User;
};

module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER,
  });

  Session.associate = (models) => {
    Session.belongsTo(models.User, { foreignKey: 'userId' });
    Session.belongsTo(models.Organization, { foreignKey: 'orgId' });
  };

  return Session;
};

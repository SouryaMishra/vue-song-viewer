module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    email: {
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};

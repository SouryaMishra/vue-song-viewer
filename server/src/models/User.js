const { hashPassword } = require("../utils");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(60),
      },
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
      },
    }
  );

  return User;
};

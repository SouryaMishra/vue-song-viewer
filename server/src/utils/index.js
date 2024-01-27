const bcrypt = require("bcrypt");

const comaparePassword = async (incomingPassword, actualPassword) => {
  const result = await bcrypt.compare(incomingPassword, actualPassword);
  return result;
};

const hashPassword = async (user) => {
  const SALT_ROUNDS = 10;

  if (!user.changed("password")) {
    return;
  }

  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.setDataValue("password", hashedPassword);
};

module.exports = {
  comaparePassword,
  hashPassword,
};

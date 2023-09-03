const DataTypes = require("sequelize");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcryptjs"));

async function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }

  return bcrypt.genSalt(SALT_FACTOR).then((salt) => {
    bcrypt
      .hash(user.password, salt)
      .then((hash) => user.setDataValue("password", hash));
  });
}

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = async function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};

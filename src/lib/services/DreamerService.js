const bcrypt  = require("bcrypt");
const Dreamer = require("../models").Dreamer;

class DreamerService
{
  createAccount(
    username,
    rawPassword
  ) {
    return bcrypt.hash(
      rawPassword,
      10
    ).then(
      (password) =>
      {
        return Dreamer.create({
          username,
          password
        });
      }
    );
  }
}

module.exports = DreamerService;

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

  logIn(
    username,
    password
  ) {
    return Dreamer.findOne({
      "where" : {
        username
      }
    }).then(
      (dreamer) =>
      {
        const match = bcrypt.compareSync(
          password,
          dreamer.password
        );

        if (!match)
        {
          throw new Error("Invalid username/password combination");
        }

        return dreamer;
      }
    );
  }
}

module.exports = DreamerService;

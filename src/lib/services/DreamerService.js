const bcrypt  = require("bcrypt");
const Dreamer = require("../models").Dreamer;

const InvalidCredentialsError = require("../../lib/services/dreamer/InvalidCredentialsError");

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
        let match = false;

        if (dreamer)
        {
          match = bcrypt.compareSync(
            password,
            dreamer.password
          );
        }

        if (!match)
        {
          throw new InvalidCredentialsError(
            "Invalid username/password combination"
          );
        }

        return dreamer;
      }
    );
  }
}

module.exports = DreamerService;

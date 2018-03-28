const express = require("express");
const router  = express.Router();

const dreamerService  = require("../../services/dreamerService");

const InvalidCredentialsError = require("../../../lib/services/dreamer/InvalidCredentialsError");

router.post(
  "/",
  function(request, response, next)
  {
    dreamerService.logIn(
      request.body.username,
      request.body.password
    ).then(
      (dreamer) =>
      {
        response.end(
          dreamer.toJSON()
        );
      }
    ).catch(
      (error) =>
      {
        if (error instanceof InvalidCredentialsError)
        {
          response.status(401);
          response.end(
            JSON.stringify({
              "type"    : "authentication",
              "message" :  error.message
            })
          );
        }
        else
        {
          next(error);
        }
      }
    );
  }
);

module.exports = router;

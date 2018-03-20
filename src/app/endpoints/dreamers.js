const express = require("express");
const router  = express.Router();

const dreamerService  = require("../services/dreamerService");

router.post(
  "/",
  function(request, response, next)
  {
    dreamerService.createAccount(
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
        next(error);
      }
    );
  }
);

module.exports = router;

const express       = require("express");
const logger        = require("morgan");
const bodyParser    = require("body-parser");

const app = express();

// Configure middleware

// Logging
app.use(logger("dev"));

// JSON parsing
app.use(bodyParser.json());

// Nothing else matched, so generate a 404 and pass it to the error handler
app.use(
  function(request, response, next)
  {
    const error = new Error("Not Found");
    error.status = 404;

    next(error);
  }
);

// Configure error handler

app.use(
  function(error, request, response, next)
  {
    let responseText = `{"message":"${error.message}"`;

    if (request.app.get("env") === "development")
    {
      responseText += `,"stack":"${error.stack}"`;
    }

    responseText += "}";

    response.status(error.status || 500);
    response.end(responseText);
  }
);

module.exports = app;

const express       = require("express");
const logger        = require("morgan");
const bodyParser    = require("body-parser");

const dreamers        = require("./src/app/endpoints/dreamers");
const dreamerSessions = require("./src/app/endpoints/dreamers/sessions");

const app = express();

// Configure middleware

// Load .env
require("dotenv").config();

// Logging
app.use(logger("dev"));

// JSON parsing
app.use(bodyParser.json());

// CORS
app.use(
  function(request, response, next)
  {
    response.header("Access-Control-Allow-Headers", "Content-Type,Content-Length");
    response.header("Access-Control-Allow-Origin",  process.env.WEB_ORIGIN);

    next();
  }
);

// Configure Endpoints

app.use("/dreamers", dreamers);
app.use("/dreamers/sessions", dreamerSessions);

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

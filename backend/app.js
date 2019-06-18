import http from "http";
import express from "express";
import colors from "colors/safe";
import configExp from "./express";
import routes from "./routes";

// ----------------------------------------------------------------------
// Instanciate servers
// ----------------------------------------------------------------------
const app = express();
const env = app.get("env");
const S_IP = "localhost";
const S_PORT = "8000";

let server = http.createServer(app);
process.on("warning", e => console.warn(e.stack));

// ----------------------------------------------------------------------
// Config servers
// ----------------------------------------------------------------------
configExp(app);
routes(app);

// ----------------------------------------------------------------------
// Start servers
// ----------------------------------------------------------------------
function startServer() {
  server.listen(S_PORT, S_IP, function() {
    console.info(
      "Express server listening on %s, in %s mode. [%s]",
      colors.cyan(S_PORT),
      env,
      colors.cyan(`http://localhost:${S_PORT}`)
    );
  });
}

setImmediate(startServer);
exports = module.exports = app;

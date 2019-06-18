// Set default node environment to development
let env = (process.env.NODE_ENV = process.env.NODE_ENV || "dev");

process.stdout.isTTY = true;
process.stderr.isTTY = true;

if (env === "dev" || env === "test") {
  // Register the Babel require hook
  require("babel-register");
}

// Export the application
exports = module.exports = require("./app");

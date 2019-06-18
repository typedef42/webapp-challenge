import path from "path";
import _ from "lodash";
import express from "express";
import history from "connect-history-api-fallback";

import apiInfo from "./api/info";
import apiUsers from "./api/users";

export default function(app) {
  app.use("/api/info", apiInfo);

  if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "test") {
    app.use("/", history(), express.static(path.resolve(app.get("appPath"))));
  } else {
    console.error("Unrecognized NODE_ENV: %s", process.env.NODE_ENV);
  }
}

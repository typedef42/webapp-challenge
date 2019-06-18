import express from "express";
import fs from "fs";
import morgan from "morgan";
import methodOverride from "method-override";
import path from "path";

export default function(app) {
  let env = app.get("env");

  app.set("appPath", path.join("../frontend/", "./"));
  app.use(methodOverride("X-HTTP-Method-Override"));

  // app.use(function(req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, content-type, Accept, Authorization, authorization, X-XSRF-TOKEN');
  //   next();
  // });

  if (env === "dev") {
    app.use(morgan("dev", { stream: { write: message => console.info(message.trim()) } }));
  }

  if (!fs.existsSync(app.get("appPath"))) {
    fs.mkdirSync(app.get("appPath"));
  }
  app.use(express.static(app.get("appPath")));
}

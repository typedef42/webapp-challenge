import { Router } from "express";
import * as controller from "./controller";

let router = new Router();

router.get("/", controller.show);

export default router;

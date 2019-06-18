import fetch from "node-fetch";
import { handleError } from "../../components/errors";

export function show(req, res, next) {
  return res
    .json({ title: "node-challenge", version: "0.42", description: "This is the content of info sent by the backend" })
    .end();
}

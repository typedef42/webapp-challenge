export function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return err => {
    console.error("[RAW] " + JSON.stringify(err));
    console.error("[MSG] " + err.message);
    return res.status(statusCode).json({ error: "an error has occured on the backend" }); // should not return the complete error code to the client for security resons.
  };
}

export function breakWithError(res, message, statusCode) {
  statusCode = statusCode || 422;
  let err = new Error(message || "unknown error");
  console.error(err.message);
  return res.status(statusCode).json({ error: "an error has occured on the backend" }); // should not return the complete error code to the client for security resons.
}

export function respondWith(res, statusCode) {
  statusCode = statusCode || 200;
  return err => {
    return res.status(statusCode).end();
  };
}

const connectDataBase = require("./Database/connection");
const express = require("express");
const cors = require("cors");
const start = require("./router/routers");

const DECLARED_PORT = 4000;
const port = process.env.PORT || DECLARED_PORT;

connectDataBase();
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen({ port: DECLARED_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${DECLARED_PORT}`)
);

app.use("/", start);

//Error handler
app.use(function (err, req, res, next) {
  if (err.statusCode && err.statusCode !== 500) {
    console.log("Response Code:", req.ip, err.statusCode);
    return res.sendStatus(err.statusCode);
  } else {
    console.error(req.ip, err);
    return res.sendStatus(500);
  }
});
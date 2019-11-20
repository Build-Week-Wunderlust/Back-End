const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
// const authenticate = require("../auth/restricted-middleware.js");

const tripsRouter = require("../trips/trips-router.js");
const guidesRouter = require("../users/guides/guides-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/trips", tripsRouter);
server.use("/api/auth", guidesRouter);

server.get("/", (req, res) => {
  res.send({ message: "It's alive!" });
});

module.exports = server;

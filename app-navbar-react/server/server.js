const express = require("express");
const cors = require("cors");
const path = require("path");
const buildPath = path.resolve(__dirname, "../dist");
const server = express();

server.use(cors({ origin: "http://localhost:4321" }));

server.use("/", express.static(buildPath));

server.listen(7100, () => console.log("Server listening on port 7500"));

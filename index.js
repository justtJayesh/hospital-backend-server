// importing json-server library
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const cors = require("cors");
const middleware = jsonServer.defaults();
require("dotenv").config();

const port = process.env.port || 8000;

// server.use(cors());
server.use(middleware);
server.use(router);

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

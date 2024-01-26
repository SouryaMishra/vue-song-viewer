const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

app.get("/", (_, res) => res.json({ message: "Hello World" }));

app.listen(process.env.PORT || 8081, () => console.log("server is running"));

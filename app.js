import express from "express";
import http from "http";
// import path from "path";

import { fileURLToPath } from "url";
import path from "path";
import { configureSocketIO } from "./utils/socketLogic.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
// const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
app.get("/chat", (req, res) => {
  console.log("hello chat");
  res.render("chatView");
});

//route which starts io and listens
app.get("/chat-now", async (req, res) => {
  res.render("chatView");
});

//When socket logic is used here, it runs to see if users are connected,when server is running
//when server is running, it detects how many browsers are opened, regardless if you're on the page
// //Using socket logic
configureSocketIO(server);

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

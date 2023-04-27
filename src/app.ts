import express, { Express } from "express";
import cors from "cors";
import { engine } from "express-handlebars";

const server: Express = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'))

server.engine("hbs", engine({ extname: ".hbs" }));
server.set("view engine", "hbs");
server.set("views", "./views");

server.get("/", (req, res) => {
    res.render('index')
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`server running on port  ${PORT}`));
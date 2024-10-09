import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.engine("html", (await import("ejs")).renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

var tarefas = [
  "Arrumar o quarto é a minha tarefa",
  "arrumar a sala é a minha segunda tarefa",
];

app.get("/", (req, res) => {
  res.render("index", { tarefaslist: tarefas });
});

app.listen(3000, () => {
  console.log("Porta 3000 escutando");
});

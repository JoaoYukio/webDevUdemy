const express = require("express");
const path = require("path");
const redditData = require("./data.json");
console.log(redditData);

const app = express();
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //Garante que o diretorio views vai funcionar independente de onde vc roda o arquivo

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/rand", (req, res) => {
	const num = Math.floor(Math.random() * 10);
	res.render("random.ejs", { rand: num });
});

app.get("/r/:subreddit", (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	console.log(data);
	res.render("subreddit", { subreddit, ...data });
});

app.get("/cats", (req, res) => {
	const cats = ["Blue", "Rocket", "Monty"];
	res.render("cats", { allCats: cats });
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

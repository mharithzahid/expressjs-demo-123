import express from "express";
import knex from "knex";

import dbConfig from "./dbConfig.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("data"));

app.get("/api", (req, res) => {
	res.send("API is running...");
});

app.listen(process.env.PORT, () => {
	console.log(`Expressjs REST api running in ${process.env.NODE_ENV} environment on port ${process.env.PORT}`);
});

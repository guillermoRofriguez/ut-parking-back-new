require("dotenv").config();


// const express = require("express")
const cors= require("cors")
import express from "express";
import bodyParser from "body-parser";
import { router } from "./api/router";
// const dbConnects = require("../src/api/database/mongo")


const app = express()
const port = process.env.PORT || 8080
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

app.get("*", async (req: express.Request, res: express.Response) => {
    res.status(404).send("This route does not exist.");
  });

app.listen(port, function () {
    console.log(`listenig on http://localhost:${port}`);
    
})

// dbConnects()
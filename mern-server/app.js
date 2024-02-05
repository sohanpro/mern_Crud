const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const db = require("./db")
const createEmployee = require("../mern-server/routes/create_employee")
const app = express()

app.use(body_parser.json())
app.use(cors());
app.use("/api",createEmployee)
const port = process.env.port || 4000

app.listen(port,()=>
{
    console.log(`connected successfully on port: ${port}`)
})
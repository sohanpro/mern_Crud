const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/employee");
mongoose.connection.on("connected",()=>
{
    console.log("connected to mongoDB")
})

mongoose.connection.on("error",(err)=>
{
    console.error("Error is:",err);
})

module.exports = mongoose
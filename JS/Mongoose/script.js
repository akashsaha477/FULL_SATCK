const mongoose=require("mongoose")
const User=require("./user.js")

mongoose.connect=("mongodb://localhost:27017/testdb",
    ()=>{
        console.log("connected to database")
    },
    e=>console.log("error")
)



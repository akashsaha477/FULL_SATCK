const jwt=require("jsonwebtoken");

const value={
    name:"akash",
    age:21  

}

const token=jwt.sign(value,"secret");
console.log(token);
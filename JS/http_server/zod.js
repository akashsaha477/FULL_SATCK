const z= require("zod");

const userSchema=z.object({
    name:z.string().min(3).max(20),
    age:z.number().min(1).max(120),
    email:z.string().email()

})

const user= userSchema.parse({
    name:"Akash",
    age:20,
    email:"ZG8U7@example.com"       
})

console.log(user);   
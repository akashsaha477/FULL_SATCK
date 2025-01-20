const express = require('express');
const app = express();
const port = 4000; 


function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if (age >= 18){
        next();
    } else {
        res.json({
            msg:"You are not old enough to drive"
        })
    }
}   
app.use(isOldEnoughMiddleware)
app.get('/ride1', (req, res)=>{
    res.json({
        msg:"Your have successfully booked ride"
})
})

app.get('/ride2', (req, res)=>{
    res.json({
        msg:"Your have successfully booked ride"
})
})

app.listen (port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
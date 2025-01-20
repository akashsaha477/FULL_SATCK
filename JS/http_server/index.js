const express = require('express');
const port=4000;
const app = express();

function sum(n){
    let ans=0
    for(let i=0;i<n;i++){
        ans+=i
    }
    return ans
}

app.get('/', (req, res) => {
    const n=req.query.n
    const result=sum(n)
    res.send(result.toString())
    
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
   
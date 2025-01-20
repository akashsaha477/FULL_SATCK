const express = require('express');
const path = require('path');

const app = express();

app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000/`);
});

let posts = [
    {
        id: 1, 
        title: "Post 1",
        content: "This is post 1"
    },
    {
        id: 2, 
        title: "Post 2",
        content: "This is post 2"
    },
    {
        id: 3, 
        title: "Post 3",
        content: "This is post 3"
    }
]


app.get('/api/posts', (req, res) => {
    res.json(posts);
})







//setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

//app.get('/about',(req,res)=>{
  //  res.sendFile(path.join(__dirname,'public','about.html'))
//})
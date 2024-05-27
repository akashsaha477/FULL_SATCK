const fs = require('fs');

function akashReadFile(){
    let a= new Promise(function(resolve){
        fs.ReadFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
        return a;
    })
}

function onDone(data){
    console.log(data)
}

akashReadFile().then(onDone);
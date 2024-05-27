const fs = require('fs');

function akashReadFile(){
    return new Promise(function(resolve){
        fs.ReadFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

akashReadFile().then(onDone); 
/*Callback Function
function akashasyncfunction(callbacks){
    callbacks("Hi there")
}

async function main(){
    akashasyncfunction(function(value){
        console.log(value);
    });
}
main();
*/
/*
function AkashAsyncFunc(){
    let p=new Promise(function(resolve){
        resolve("Hi there")
    });
}

function main(){
    AkashAsyncFunc().then(function(value){
        console.log(value);
    });
}

main();
*/

function AkashAsyncFunc(){
    let p=new Promise(function(resolve){
        resolve("Hi there")
    });
}

async function main(){
    const value= await AkashAsyncFunc();
        console.log("akash");
    
}

main();

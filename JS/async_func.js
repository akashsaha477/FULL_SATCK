function findSum(n){
   let  a=0;
    
    for(let i=0;i<n;i++){
        a+=i;
    }
    return a;
}

function findSumTill1000(){
    console.log(findSum(1000));
}

setTimeout(findSumTill1000,5000);
console.log("hello world")
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function summary(a,b,sudofunction,cuda){
    const value1=sudofunction(a);
    const value2=cuda(b);
    return value1+value2
}

const result = summary(2,3,cube,square);
console.log(result);
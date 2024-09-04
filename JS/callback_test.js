function square(a){
    return a*a
}

function cube(a){
    return a*a*a
}

function math(a,b,fn,fn1){
    let p=fn(a);
    let q=fn1(b);
    return p+q
}

console.log(math(2,3,square,cube))
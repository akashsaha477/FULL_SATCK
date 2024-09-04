function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function Akash12(a,b,fntofunc1,fntofunc2){
    let p=fntofunc1(a);
    let q=fntofunc2(b);
    return p+q; 

}

let y =console.log(Akash12(2,3,square,cube));
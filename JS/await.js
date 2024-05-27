function kiratsAsyncFunction () {
    let p = new Promise( function (resolve) {
    // do some async logic here
    setTimeout (function () {
    resolve("hi there!")
    }, 3000)    
    });
    return p;
    }
async function main() {
    // no callbacks, no. then syntax
    // kiratsAsyncFunction(). then (function(value) {
    // console. log(value);
    // })
    let value = await kiratsAsyncFunction();
    console. log("hi there1");
     }
    main( );
    console.log( "after main");

    //cannot use await in a top level function
    //we have to use async function

    //
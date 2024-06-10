// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // its good to end the IIFE with a semicolon so it doesnt cause error when u run more than one IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// IIFE is to provide private scope and avoid global scope pollution but nowadays we have modules and classes replacingthe purpose of IIFE


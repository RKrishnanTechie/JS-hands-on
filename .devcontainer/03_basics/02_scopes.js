//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);  
// console.log(b);  
// console.log(c);   


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // hitesh is printed because inner fun has access to outer func (lexical scoping)
    }
    // console.log(website);  // reference error 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  // hitesh youtube 
    }
    // console.log(website); reference error
}

// console.log(username); refernce error

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // this gives the output due to function hoisting on top of their scope

function addone(num){
    return num + 1
}



addTwo(5)   // this gives reference error because function expressions are not hoisted
const addTwo = function(num){
    return num + 2
}
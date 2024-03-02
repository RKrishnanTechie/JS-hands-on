//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);   
// return typeof function is function , Array is object 



// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stacks vs Heaps understanding 
let myYoutubename = "rkyoutube"

let anothername = myYoutubename; // copy of myYoutubename is given not the actual myYoutubename so any changes to anothername variable will its content but not myYoutubename value

anothername = "akyoutube"

console.log(myYoutubename);

console.log(anothername);

const userOne = {
    mailId : "abc@gmail.com"
}
const userTwo = userOne;
userTwo.mailId = "xyz@gmail.com" // changes the mailId property of both variables to xyz@gmail.com as they both reference the same object in the heap

console.log(userOne);
console.log(userTwo)
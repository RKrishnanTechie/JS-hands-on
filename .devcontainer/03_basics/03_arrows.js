const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // "this" refers to current object
        console.log(this); // refers to the entire object user
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  // now the this.username refers to sam instead of hitesh as we have changed the username

// console.log(this); // refers to empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this);  // this.username gives undefined but only this gives global object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //  this.username gives undefined but only this gives global object
// }
// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this); // this.username gives undefined but only this gives global object {} 
} 

chai()

// --------------different ways to write arrow functions-------------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})  // to return object we need {}


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
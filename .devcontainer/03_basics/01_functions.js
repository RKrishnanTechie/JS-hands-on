function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    
    return number1 + number2  // return is important for the value to be printed elsewhere if just console.log is used then it wont be available to be  printed 
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result); // result is printed because we used return inside the function

function loginUserMessage(username = "sam"){  // default parameter value when function call is made by passing nothing
    if(!username){    
        console.log("PLease enter a username");
        return  // this prevents the execution of next statement as function terminates here and returns undefined if function call is made with any falsy value
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){  // rest operator to accept any number of parameters
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  val1 and val2 takes first 2 values and remaining values are stored into an array due to rest operator


// passing an object to the function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// passing an array to the function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
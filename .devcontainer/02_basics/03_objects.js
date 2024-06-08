//  for singleton objects we use Object.create

// object literals can be used for non-singleton objects

const mySym = Symbol("mykey") // way to declare a symbol

// keys in an object are stored as strings by default unless a symbol is used for uniqueness
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey",  // way to use symbol in an object so its key  
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"]) here dot access wont work
console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  -- any changes made to JsUser after this point wont be taking place due to freeze
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting); gives the reference of the function
console.log(JsUser.greeting()); // executes the function
console.log(JsUser.greetingTwo());
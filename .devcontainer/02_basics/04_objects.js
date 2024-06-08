// const tinderUser = new Object()  --- the same can be created with below syntax too
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Different ways to combine objects 
// const obj3 = { obj1, obj2 }  
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} is target and other source objects are added and returns the modified target object
const obj3 = {...obj1, ...obj2}  // usin spread operator , same as in arrays
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "hoo@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)// accesing array of object
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); returns array of keys
// console.log(Object.values(tinderUser)); returns array of values
// console.log(Object.entries(tinderUser)); returns pair of keys and values as array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); tells if the said property is present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Object destructuring {} for clean coding 
const {courseInstructor: instructor} = course  // instructor is used to rename courseInstructor

// console.log(courseInstructor);
console.log(instructor);

// JSON Formats 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // pushes dc_heros as an array inside marvel_heros not as indivisual items as we wanted

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // produces a new flat array containing all elements from both 
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this method of using spread is preferred over concat mostly as this can combine more than 2 arrays easily

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// Infinity refers to any number of depth u can also specify exact depth u want like 2 here
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checking if it is an array 
console.log(Array.from("Hitesh")) // creating arrays from iterable objects
console.log(Array.from({name: "hitesh"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// creating arrays with a specific set of elements.
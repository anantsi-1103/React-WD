// let arr = [1,2,3]


// let arr2 = [...arr]


// if(arr == arr2){
//     console.log("Equals")
// }
// else{
//     console.log("Not Equals")

// }


// function hello( a ,b = 10 ){
//     console.log(b + a)
// }

// hello(10)

// map
// const num = [1,2,3,4]

// const square = num.map(n => n * n )

// console.log(square)

// // filter
// const num = [1,2,3,4]
// const even = num.filter(n => n % 2 == 0 )

// console.log(even)

// while , do while , for loop , for of , for each - function 


// for (let a of arr){

// }


// callback - 

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function bye() {
//     console.log("Goodbye!");
// }

// greet("Anant", bye);


// Sync -> 

// console.log("Start");

// console.log("Middle");

// console.log("End");

// const promise = new Promise((res, rej) => {

//     let success = true;

//     if (success)
//         res("Data Loaded");
//     else
//         rej("Error");
// });

// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// then - resolve
// catch - reject


// async 
// function fetchData() {
//     return Promise.resolve("User Data");
// }

// async function getData() {
//     const data = await fetchData();
//     console.log(data);
// }

// getData();


// import {add} from "./math.js"

// console.log(add(20,30))



// Nullish Coalescing
// const username = "Aman"
// console.log(username ?? "Guest")

// Ternary 
// find , some , every , includes

const arr = [1, 2, 3];

console.log(arr.find(n => n > 3));     // 4
console.log(arr.some(n => n > 4));     // true
console.log(arr.every(n => n > 0));    // true
console.log(arr.includes(3));          // true
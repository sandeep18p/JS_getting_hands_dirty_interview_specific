// https://www.youtube.com/watch?v=SexK7uvIsh0&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=4

console.log("varName", varName); // Outputs: varName undefined
var varName;
console.log("varName", varName); // Outputs: varName undefined
varName = "I am Captain America";
fn(); // Outputs: hello from js

function fn() {
    console.log("hello from js");
}

fn(); // Outputs: hello from js

try {
    fncontainer(); // This will throw an error
} catch (e) {
    console.log(e.message); // Outputs: fncontainer is not a function
}

// this function expression fncontainer will undefined in top when hoisted
var fncontainer = function() {
    console.log("hola");
}

fncontainer(); // Outputs: hola

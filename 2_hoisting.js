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

var fncontainer = function() {
    console.log("hola");
}

fncontainer(); // Outputs: hola

// https://www.youtube.com/watch?v=efpmNYgjbgs&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=5

// Note 1)  15:30 Lexical Scope:- hamesha function defination ke outside dekhenge apan function call ka outside nhi dekhenge
// Note 2) 18:41 Important Lexical scope definition
// Note 3) lexical outside important
// Note 4) Scope chain

console.log("line number 1", varName); 
var varName = 10;

// fn b definition
function b() {

console.log("line number 5", varName);  // ye important hai yaha par ye varName =10 le raha not 20

}

function fn() {

console.log("line number 9", varName); 
var varName = 20;
b();
console.log("line number 9_1", varName); 
}

// from fn
fn();

console.log("line number 13", varName); 


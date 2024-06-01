// https://www.youtube.com/watch?v=efpmNYgjbgs&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=5

// Note 1)  16:19 Lexical Scope:- hamesha function defination ke outside, 
// Note 2) 18:41

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


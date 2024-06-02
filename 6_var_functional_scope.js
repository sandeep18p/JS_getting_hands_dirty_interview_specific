// https://www.youtube.com/watch?v=posnuA3g1Ts&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=6

console.log(x);
var x =21;
x++;

function exampleFunction() {
    if (true) {
        var x = 10; // x is declared with var, so it has function scope
        console.log(x);
        x++;
    }
    console.log(x); // x is accessible here, will print 10
}

exampleFunction();
console.log(x); 
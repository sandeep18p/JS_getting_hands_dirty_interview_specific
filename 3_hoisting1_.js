console.log('var ',run);
var run=10;

function b(){
    console.log('Inside b',run);
    // It logs the value of run which is declared in the global scope. 
    // Since run is declared globally and initialized before the console.log()
    //  statement inside b(), it can access the global run variable, and it
    //  will output the initialized value of run, which is 10.
}
console.log('var 2',run);

function c(){

    console.log('Inside c',run);
    var run = 10;
    console.log('Inside c after initialization',run);

    //Inside c(), there's a local variable also named run, which shadows the global run variable.
// When console.log('Inside c', run) is executed, it refers to the local run variable. However, at this point, run is declared but not yet initialized. Therefore, it outputs undefined.
// After this, var run = 10; initializes the local run variable.
// The subsequent console.log('Inside c after initialization', run); will output 10, as it's now accessing the locally initialized run variable.

}

function fn(){
    console.log('var 3',run); //here it will be undefined because here new hoisted gets created run will be undefined at the top of inside this fn i
    var run=22;
    b();
    console.log('var 4',run);
    c();
}

fn();

//explanation 
// So, b() and c() work differently because of the scoping rules in JavaScript:

// b() accesses the globally scoped run variable, which is initialized before the console.log() statement.
// c() declares a local run variable, which is initialized after the console.log() statement. Thus, accessing it before initialization results in undefined.
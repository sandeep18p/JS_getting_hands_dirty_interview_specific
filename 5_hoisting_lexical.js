//is example me important ye hai ki x ko declare nhi kia gaya hai fn me to sab ek x ko point kar re

var x=10;
function fnB(){
    console.log('Inner line 4>>>>>>>>>> ',x) //
}
console.log('Outer line 6>>>> ',x) //
x=20

function fn(){
    console.log('Inner line 9>>>>>>>>>> ',x)
    x=30;
    console.log('Inner line 11>>>>>>>>>> ',x)
    x=40;
    fnB();
    console.log('Inner line 14>>>>>>>>>> ',x)
}
console.log('Outer line 16>>>> ',x)
x=50;
fn();
console.log('Outer line 19>>>> ',x)
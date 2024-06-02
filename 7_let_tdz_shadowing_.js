// https://www.youtube.com/watch?v=FPqmeaY_QFI&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=7

// 1) Temporal Dead zone :- 5:15
// 1.1) Let ko do baar declare nhi kar sakte error dega
//  2) let me bhi hoisting hota hai, agar do baar declare karenge to ye hoisiting ke wajah se starting me hi detect karke error throw kar dega
//  3) node me temporal dead me difference 6:44
// 4) let ko declare hone se pehle access karnege to wo safety mesaure ke karan error deta hai
// 5) cannot access let before initialization



//work karega ye 
let b;
console.log(b)
b=1;

//error
// 4) let ko declare hone se pehle access karnege to wo safety mesaure ke karan error deta hai
// console.log(a); 
// let a;
// a=1;

//Temporal deadzone
let x=10;
if(x==10){
   console.log(x);  // temporal dead zone ke karan error dega ye
   let x;
   x=30;
}

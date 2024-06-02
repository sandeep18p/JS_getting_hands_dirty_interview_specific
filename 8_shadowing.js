// https://www.youtube.com/watch?v=FPqmeaY_QFI&list=PL-Jc9J83PIiFU_evuYnTGHVXU_LeZryNP&index=9
//legal shadowing
var a=10;

{
    let a=20;
    console.log(a)
}

//illegal shadowing 18:11 video
let x=10;

{
    var x=20; //error dega ye upar wala error nhi dega
    console.log(a)
}
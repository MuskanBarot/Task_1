// "use strict";
// const ps=require('prompt-sync');
// const prompt=ps();
// function Uppercase(str){
    
//     var str1=str.toUpperCase();
//     console.log(str1);
// }
// let name=prompt("enter name:");
// Uppercase(name);

function upperCaser(input) {
    str = input.toUpperCase();
    return str;
}
module.exports=upperCaser
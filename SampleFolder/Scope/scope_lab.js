//Global scope
var globalVar = "Saya adalah variabel global";
let globalLet = "Saya juga global, tetapi dibatasi dengan let";
const globalConst = "Saya adalah konstanta global";

{
//Block scope
var blockVar = "Saya adalah var yang dibatasi blok";
let blockLet = "Saya adalah let yang dibatasi oleh blok";
const blockConst = "Saya adalah const yang dibatasi oleh blok";
}

//Global scope output
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope output
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
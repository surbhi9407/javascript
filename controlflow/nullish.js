// Nullish coalescing operator(??): null undefine
let val1;
val1=5??10
let val2,val3;
val2=null??10??12
val3=undefined??15
console.log(val1);
console.log(val2);
console.log(val3);

// Terniary Opeerator
// Syntax => condition?true:false

const iceteaPrice=100
iceteaPrice<=80?console.log("Less than 80"):console.log("more than 80");
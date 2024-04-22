//Immediatly Invoked function Expression [IIFE]
 
//Normal function
function chai(){
    console.log(`DB CONNECTED`);
}
chai();

//1. Named IIFE
(function chai1(){
    console.log(`DB CONNECTED1`);
})();

//2.Unnamed iife with arrow function
(()=>{
    console.log(`DB CONNECTED TWO`);
})();

//3.
(function aurcode(){
    console.log(`DB CONNECTED THREE`);
})();

//4.UnNamed IIFE
((name)=>{
    console.log(`DB CONNECTED FOUR${name}`);
})("surbhi")
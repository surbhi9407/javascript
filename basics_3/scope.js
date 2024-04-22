let a=100
//const b=20
var c=303

console.log(a);
console.log(b);
console.log(c);
if(true){
    let a=10
    const b=20
   // var c=300
   console.log("INNER:",a);

}
console.log(a);
//console.log(b);
//console.log(c);
//+++++++++++ Nested Scope++++++++++++//
function one(){
    const username="surbhi"
    
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
if (true){
    const username="surbhi"
    if(username==="surbhi"){
        const website="youtube"
        console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);
console.log(addone(3)); 
function addone(num){
    return num+1
}
//console.log(addone(3)); 
//console.log(addTwo(10)); 
const addTwo=function(num){ //expression 
    return num+2
}
console.log(addTwo(10)); 
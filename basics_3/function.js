console.log("S")
console.log("U")
console.log("R")
console.log("B")
console.log("H")
console.log("I")

function saySomeThing() {
    console.log("S")
    console.log("U")
    console.log("R")
    console.log("B")
    console.log("H")
    console.log("I")
}
saySomeThing()

function add(num1,num2) {
    let result= num1+num2;
    return result
}
const result=add(10,20)
console.log("Result :",result);
function addTwoNumber(num1,num2){
     
}
function loginUserMessage(username){
    return`${username} just logged in`
}
console.log(loginUserMessage("surbhi"));

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a user name");
        return;
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("surbhi"));

function clculateCartPrice(val1,val2,...num1){ //Rest opreator
    return num1
}
//console.log(clculateCartPrice(2));
console.log(clculateCartPrice(2,3,4,5));

const user={
    username:"surbhi",
    price:100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}
handleObject({
    username:"dahare",
    price:1000
})
const myNewArray=[200,300,400]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
/*const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("Welcome To facebook")
}
if(2=="2"){
    console.log("Executed");
}
if(2==="2"){
    console.log("Ex");
}
const temperature=41
if (temperature<50) {
    console.log("Less than 50");    
}
console.log("tempreature is greater than 50");
const temperature1=53
if (temperature1<60) {
    console.log("Hello How are you");
}
// if...else
const temperature2=41
if(temperature2===41){
    console.log("Less than 50");
}else{
    console.log("tempreature is greater than 50")
}
const score=200
if(score>100){
    const power="fly"
    console.log(`User power:${power}`)
}
// shorthand notation 
const balance=1000
if(balance>500)console.log("test"); // Implicit scope


if(balance<500){
    console.log("Less than");
}else if(balance<750){
    console.log("Less than 750");
}else if(balance<900){
    console.log("Less than 750");
}else{
    console.log("Less than 1200");
}*/

const isUserLoggedIn=false
const debitCard=false
if(isUserLoggedIn||debitCard){
    console.log("allow to buy course");
}
// true|| true => True
//true || false => True //.... ||=> pipe line / And
 
const LoggedInFromGoogle=false
const loggedInFromEmail=true
if(LoggedInFromGoogle&&loggedInFromEmail){
    console.log("USer logged in");
}
// true && false=> false
// true && true => ture
const user={
    username:"Surbhi",
    price:1000,
    welcomeMessage:function(){
       // console.log(`${this.username},welcome to website`);
       // console.log(this);
    }
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this);

function chai(){
    let username="Hitesh"
    //console.log(this);
    console.log(this.username);
}
chai()

const chai=function(){
    let username="hitesh"
    console.log(this.user);
}
chai()
// Arrow function
const chai=()=>{
    let username="hitesh"
    //console.log(this.username);
    console.log(this);
}
chai()

const addTwo1=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo1(10,20));

const addThree=(num1,num2)=> num1+num2
console.log(addThree(101,121));

// Arrow function with object
const addTwo=(num1,num2)=>({
    username:"Surbhi"
})
console.log(addTwo(1,2));

const myArray=[2,3,4,5,6]

myArray.forEach(function(){})
myArray.forEach(()=>{})
//myArray.forEach(()=>())

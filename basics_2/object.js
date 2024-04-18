// how to create a object as literal
const object={}
//console.log(object);
const mysym=Symbol("Key1")
const JsUser={
    name:"surbhi",
    "full name":"surbhi dahare",
    [mysym]:"Key1",
    age:30,
    location:"balaghta",
    email:"surbhi9407@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
console.log(JsUser["full name"]);

//const array=["h","i"]
//console.log(array[1])

//how to access object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mysym]);
console.log(typeof JsUser[mysym]);
console.log(typeof mysym);
JsUser.email="surbhidhamde21@gmail.com"
console.log(JsUser.email);
//console.log(Object.freeze(JsUser));

// Add a function in object
JsUser.greeting=function () {
    console.log("Hello js user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greetingTwo());
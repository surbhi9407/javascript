const tinderUser=new Object()
//console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="surbhi"
tinderUser.isloggedIn=true

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty(`isloggedIn`));

const regularUser={
    email:"s@gmail.com",
    fullname : {
        userFullName:{
            //firstName:"surbhi",
            LastName:"dahare"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
 //const obj4=Object.assign({},obj1,obj2,obj3)
 const obj4={...obj1,...obj2,...obj3}
 console.log(obj4);

 const user=[
    {
        id:1,
        email:"surbhi dhamde"
    },
    {
        id:1,
        email:"surbhi dhamde"
    },
    {
        id:1,
        email:"surbhi dhamde"
    },
    {
        id:1,
        email:"surbhi dhamde"
    }
    
 ]
user[1].email

// De-structuring of object
const course={
    coursename:"javaScript",
    price:1000,
    courseInstructor:"Hitesh"
}
//course.courseInstructor
const {courseInstructor}=course //define a course Instructor
console.log(courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);

/*const navbar=({company})=>{
}
navbar(company="surbhi")*/
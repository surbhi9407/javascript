const userEmail=[]
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
// false value => false,0,-0,bigInt 0n,"",null,undefined,NaN[Not a Number]

// truthy values=> true,"0",'false'," ",[],{},function(){}.

if(userEmail===0){ // zero and empty aaray is not same
    console.log("Array is empty");
}

const emptyobj={} // zero and empty object is same so it's true
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty")
}
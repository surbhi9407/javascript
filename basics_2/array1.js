/*const myarr=[1,2,3,4,5]
const newArr=myarr.join
console.log(newArr);
console.log(myarr);
console.log(typeof newArr);
// slice
console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);
const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("C",myarr);*/


const marvel_heroses=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heroses.push(dc)
//console.log(marvel_heroses);

//const newhero=marvel_heroses.concat(dc)
//console.log(newhero);

//const newhero1=[...marvel_heroses,...dc]
//console.log(newhero);

//const nestarray=[1,2,3,4[3,4,5],6,7,8,9,[1,2,3,4,[6,78,9]]]
//console.log(nestarray);
//const nestarray1=nestarray.flat(Infinity)
//console.log(nestarray1);


console.log(Array.isArray("surbhi"))
console.log(Array.from("surbhi"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
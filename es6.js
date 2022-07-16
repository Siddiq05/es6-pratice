let age = 25;
console.log(age);
 
const age = 25;
console.log(age);

var sum = (a,b) => a+b;
console.log(sum(5,7));


var add = (a,b) =>{
    sum=0;
    sum= a+b;
    return sum;
}
console.log(add(5,7));

const details = {
    name: "siddiq",
    age: 25,
    address: "kolar"
};
console.log(details.name);
console.log(details.age);
console.log(details.address);

const details = {
    name: "yaseen",
    age: 21,
    address: "kolar"
};
const {name, age, address } = details;
console.log(details);
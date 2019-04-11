/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
myObj = {
    name: "Ashley",
    age: 27,
    speak: function (){
        return `Hi, I'm ${this.name}!`
    }
}
// Principle 3

// code example for New Binding
function FamilyGuyChar(name){
    this.name = name;
    this.speak = function(){
        return `Hi, my name is ${this.name}.`
    }
}

const stewie = new FamilyGuyChar(`Stewie`);
const meg = new FamilyGuyChar(`Meg`);
const bryan = new FamilyGuyChar(`Bryan`);
const peter = new FamilyGuyChar(`Peter`);
const lois = new FamilyGuyChar(`Lois`);
const chris = new FamilyGuyChar(`Chris`);

console.log(stewie.speak());
console.log(meg.speak());
console.log(bryan.speak());
console.log(peter.speak());
console.log(lois.speak());
console.log(chris.speak());

// Principle 4

// code example for Explicit Binding

const skills = ["HTML", "SQL", "CSS", "JS"];

const person = { 
    name: "Ashley"
}

function call(skills) {
    return `Hi! my name is: ${this.name} and this are my skills: ${skill1}, ${skill2}`
}
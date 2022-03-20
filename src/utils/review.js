function Person() {
  console.log("Person");
}

const p = new Person();

// console.log(p instanceof Person);
// console.log(p instanceof Function);
// console.log(Person instanceof Function);

class PersonClass {}

const ppp = new PersonClass();

console.log(ppp instanceof Function);
console.log(PersonClass instanceof Function);
console.log(Function);
console.log(PersonClass);

function task3() {

    return Object.create(null); 
}
    
const person = task3();

console.log(person);
console.log(Object.getPrototypeOf(person));
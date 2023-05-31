const person = {
	a: 5,
	b: 3
}
const p1 = Object.create(person);

person.c = 4

function task1(obj) {
	for (let key in obj) {

    if (obj.hasOwnProperty(key)) {

        console.log(key, obj[key]);
    }
    }
}

task1(person);
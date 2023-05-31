const person = {
	a: 5,
	b: 'lolik'
}

function task2(obj, str) {

    return (obj.hasOwnProperty(str)) 
}
    

console.log(task2(person, "d"));
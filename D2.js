// Write a method that takes a string as input. It should return true if the input is a valid IPv4 address 
// (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

// split the string by . length should b 4. Check that each number is a valid number

function validIP(str) {
    numbers = str.split(".");
    if (numbers.length !== 4) return false;

    for (let i = 0; i < numbers.length; i++) {
        let number = parseInt(numbers[i]);
        if (number < 0 || number > 255) {
            return false;
        }
    }

    return true
}

// console.log(validIP("0.0.0.0"));
// console.log(validIP("0.0.0.0.0"));
// console.log(validIP("0.0.256.0"));

// Implement the Array.prototype.map function in JavaScript.
Array.prototype.myMap = function(fn) {
    const result = [];
    this.forEach(el => {
        result.push(fn(el));
    })
    return result;
}

console.log([1,2,3].myMap(el => el * 2));


// In a SQL db, you have two tables, an employees table and a departments table. 
// Employees belong to only one department. Write a SQL query that, given a department name, 
// finds all the employees in that department.

// SELECT *
// FROM employees
// JOIN departments
// ON departments.id = emloyees.department_id
// WHERE department.name = tech
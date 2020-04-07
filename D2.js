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


// Write a method that reads in a file of integers, one per line, and sums them. Skip the line if it begins with a "#".
function sumFromFile(file) {
    let reader = new FileReader();
    reader.readAsText(file);
}

sumFromFile("./myFile.md");
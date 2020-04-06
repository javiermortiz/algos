// Write a method, digital_root(num). It should sum the digits of a positive integer. 
// If it is greater than or equal to 10, sum the digits of the resulting number. 
// Keep repeating until there is only one digit in the result, called the "digital root". 
// Do not use string conversion within your method.

// digital_root(num)  

function digitalRoot(num) {
    while (num >= 10) {
        num = getSum(num);
    }

    return num;
}

function getSum(num) {
    result = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10)
    }
    return result;
}

function recursiveDigitalRoot(num) {
    if (num < 10) return num;
    return recursiveDigitalRoot((num % 10) + (Math.floor(num / 10)));
}

console.log(digitalRoot(5));
console.log(digitalRoot(11));
console.log(digitalRoot(2525));
console.log(recursiveDigitalRoot(5));
console.log(recursiveDigitalRoot(11));
console.log(recursiveDigitalRoot(2525));



//Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. 
// Assume lowercase and no punctuation. Preserve spaces.
//Ceasar Cipher

function ceasarCipher(message, increment) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let letters = message.split('');
    let newMessage = "";

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === " ") {
            newMessage += " ";
        } else {
            let oldIdx = alpha.indexOf(letters[i]);
            let newIdx = (oldIdx + increment) % 26;
            newMessage += alpha[newIdx];
        }
    }

    return newMessage;
}

console.log(ceasarCipher("abc def", 2));
console.log(ceasarCipher("xyz", 1));
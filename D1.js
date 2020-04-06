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

// console.log(digitalRoot(5));
// console.log(digitalRoot(11));
// console.log(digitalRoot(2525));
// console.log(recursiveDigitalRoot(5));
// console.log(recursiveDigitalRoot(11));
// console.log(recursiveDigitalRoot(2525));



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

// console.log(ceasarCipher("abc def", 2));
// console.log(ceasarCipher("xyz", 1));


//Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. 
//A substring is defined as any consecutive slice of letters from another string.
// Bonus: solve it in O(m * n) using O(m * n) extra space. 
//(Hint: the solution involves dynamic programming which will be introduced later in the course.)

function longest_common_substring(str1, str2) {
    let longest = "";

    for (let i = 0; i < str1.length - 1; i++) {

        for (let j = i + 1; j < str1.length; j++) {

            let sub = str1.slice(i, j);
            if (str2.includes(sub) && sub.length > longest.length) longest = sub;
        }
    }

    return longest;
}

// console.log(longest_common_substring("abbcd", "dcbba"));
// console.log(longest_common_substring("abbcatd", "dcatbba"));

function makeMatrix(str1, str2) {
    let matrix = Array(str1.length + 1).fill(0).map(slot => Array(str2.length + 1).fill(0));
    str1.split('').forEach((el1, idx1) => {
        str2.split('').forEach((el2, idx2) => {
            if (el1 === el2) {
                matrix[idx1 + 1][idx2 + 1] = matrix[idx1][idx2] + 1;
            } else {
                matrix[idx1][idx2] = 0;
            }
        })
    })
    return matrix;
}

function longestCommonSub(str1, str2) {
    let matrix = makeMatrix(str1, str2);
    let longest = "";

    matrix.forEach((row, idx1) => {
        row.forEach((length, idx2) => {
            if (length > longest.length) {
                longest = str1.slice(idx2 - length, idx2);
            }
        })
    })

    return longest;
}

console.log(longestCommonSub("cat", "rat"));
console.log(longestCommonSub("tutorial", "tutorialrogramming"));

//Write a function that takes an array of integers and returns their sum. Use recursion.
function sumRec(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([0,1,2]));

// Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
// Solve it both iteratively and recursively.

function fibs(num) {
    if (num === 0) return [ ];
    if (num === 1) return [ 0 ];
    if (num === 2) return [ 0, 1];
    let result = [ 0, 1];

    while (result.length < num) {
        let nextFibo = result[result.length - 1] + result[result.length - 2];
        result.push(nextFibo);
    }

    return result;
}

console.log(fibs(5));

function recursiveFibs(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let nextFibo = recursiveFibs(num - 1) + recursiveFibs(num - 2);
    return recursiveFibx(num - 1).push(nextFibo);
}

console.log(fibs(5));


// Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not. Use JavaScript.

// This solution takes less time and memory than rebuilding the string backward and comparing the two.

function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }

    return true;
}

console.log(palindrome("abba"));
console.log(palindrome("dog"));
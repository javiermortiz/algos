function stringCompression(str) {
    let i = 0;
    let result = [];
    const occurrencesArr = [];

    while (i < str.length) {
        let currentChar = str[i];
        let occurrences = 0;
        
        while (currentChar === str[i]) {
            occurrences++;
            i++;
        }

        result.push(currentChar);
        result.push(occurrences);
        occurrencesArr.push(occurrences);
    }

    if (occurrencesArr.every(el => el === 1)) {
        return str;
    } else {
        return result.join("");
    }
}

console.log(stringCompression("aabcccccaa"));
console.log(stringCompression("abcdefg"));
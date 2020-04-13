function checkPermutations(str1, str2) {
    const hash1 = {};
    str1.split("").forEach(el => {
        if (hash1[el]) {
            hash1[el]++;
        } else {
            hash1[el] = 1;
        }
    })

    str2.split("").forEach(el => {
        if (hash1[el]) {
            hash1[el]--;
        } else {
            hash1[el] = 1;
        }
    })

    return Object.keys(hash1).every(key => hash1[key] === 0);
}

console.log(checkPermutations("abc", "bca"));
console.log(checkPermutations("abcd", "xyz"));
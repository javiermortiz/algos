function oneAway(str1, str2) {
    const hash = {};

    str1.split("").forEach(char => {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    });

    str2.split("").forEach(char => {
        if (hash[char]) {
            hash[char]--;
        } else {
            hash[char] = 1;
        }
    });

    const result = Object.values(hash).reduce((total, val) => total + val);
    console.log(result);
    return result >= 0 && result <= 2;
}

console.log(oneAway("pale", "bale"));
console.log(oneAway("spark", "starn"));
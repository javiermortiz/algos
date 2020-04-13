function palindromePermutation(str) {
    const pal = {};
    str.split("").forEach(char => {
        char = char.toLowerCase();
        if (char === '' || char === " ") return;
        if (!pal[char] || pal[char] === 0) {
            pal[char] = 1;
        } else {
            pal[char] --;
        }
    })

    const result = Object.values(pal).reduce((total, val) => total + val);
    return result >= 0 && result <= 1;
}

console.log(palindromePermutation("Octa tac"));
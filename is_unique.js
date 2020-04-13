function isUnique(str) {
    const visited = [];

    for (let i = 0; i < str.length - 1; i++) {
        if (visited.includes(str[i])) return false;
        visited.push(str[i]);
    }

    return true;
}

console.log(isUnique("cat"));
console.log(isUnique("oops"));
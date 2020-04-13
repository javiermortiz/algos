function urlify(str, len) {
    return str.trim().split(" ").join("%20");
}

console.log(urlify("My name is    "));
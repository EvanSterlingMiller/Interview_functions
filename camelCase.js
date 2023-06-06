var camelCase = function(str) {
    const words = str.split(' ')
        .map(thing => thing.trim())
        .map((thing, index) => index === 0 ? thing[0].toLowerCase() + thing.substring(1) : thing[0].toUpperCase() + thing.substring(1));
    return words.join("");
}

console.log(camelCase('Bananas are the best'));
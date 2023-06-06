var snake_case= function(str) {
    const words = str.split(' ').map(thing => thing.trim().toLowerCase());
    return words.join("_");
}
console.log(snake_case("Bananas Are the Best"))
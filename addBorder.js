/**
 * 
 * @param {Array} picture 
 */
function addBorder(picture) {
    var length = picture[0].length + 2;
    var wall = "";

    for(var index = 0; index < length; index++) {
        wall = wall.concat("*");
    }

    picture.unshift(wall);
    picture.push(wall);

    for(var row = 1; row < picture.length -1; row++) {
        picture[row] = "*".concat(picture[row], "*")
    }

    console.log(picture);
    return picture;
}

let arr = ["abc", "ded"]
/**
 * Result: 
 * ["*****", 
    "*abc*", 
    "*ded*", 
    "*****"]
 */
addBorder(arr)

function adjacentElementsProduct(inputArray) {
    var result = Number.NEGATIVE_INFINITY;
    for(var index = 0; index < inputArray.length - 1; index++) {
        if(inputArray[index] * inputArray[index + 1] > result) {
            result = inputArray[index] * inputArray[index + 1];
        }
    }
    
    return result;
}

let arr = [3, 6, -2, -5, 7, 3]
//RESULT: 21
adjacentElementsProduct(arr)
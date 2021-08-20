/**
 * 
 * @param {Array} a 
 */
function alternatingSums(a) {
    let resultsArray = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            resultsArray[0] += a[i];
        } else {
            resultsArray[1] += a[i];
        }
    }
    console.log(resultsArray);
    return resultsArray;
}

let arr = [50, 60, 60, 45, 70]
//result: [180, 105]
alternatingSums(arr)
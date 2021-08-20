/**
 * 
 * @param {Array} statues 
 * @returns 
 */
function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

let arr = [6, 2, 3, 8]
//result: 3
makeArrayConsecutive2(arr);
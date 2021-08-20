/**
 * 
 * @param {Array} a 
 */
function sortByHeight(a) {
    var result = a.slice();
    var pos = [];
    var i = -1;

    while ((i = a.indexOf(-1, i+1)) > -1) {
        pos.push(i);
    }
    var rpos = pos.slice();
    while(rpos.length){
        result.splice(rpos.pop(), 1);
    } 

    result.sort((a,b)=>a-b);
    while(pos.length) {
        result.splice(pos.shift(), 0, -1);
    }

    return result;
}

let arr = [-1, 150, 190, 170, -1, -1, 160, 180]
sortByHeight(arr);

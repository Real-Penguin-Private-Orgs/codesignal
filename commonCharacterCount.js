/**
 * find the number of common characters between them
 * @param {String} s1 
 * @param {String} s2 
 * @returns
 */
function commonCharacterCount(s1, s2) {
    let count = 0;
    for(var i = 0; i < s1.length; i++) {
        var j = s2.indexOf(s1[i]);
        if(j>=0){
            count++;
            s2 = s2.replace(s1[i],'');
        }
    }
    console.log(count);
    return count;
}

commonCharacterCount("aabcc", "adcaa")
/**
 * @params {number} year
 * @return 
 */
function centuryFromYear(year) {
    return Math.floor(( year - 1 ) / 100) + 1;
}

//RESULT: 20
centuryFromYear(1905)
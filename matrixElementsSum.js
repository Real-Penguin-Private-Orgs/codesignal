function matrixElementsSum(matrix) {
    let result = 0;
    for(var y = 0; y < matrix.length; y++)
        for(var x= 0; x < matrix[0].length; x++){
            if(y == 0)
                result += matrix[y][x];
            else{
                if(matrix[y-1][x] == 0)
                    matrix[y][x] = 0;
                result += matrix[y][x];
            }
        }
    return result;      
}

let matrix = [[0,1,1,2], [0,5,0,0], [2,0,3,3]]

//result: 9
matrixElementsSum(matrix)
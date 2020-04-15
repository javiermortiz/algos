function rotate(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let value = matrix[matrix.length - i - 1].shift();
            matrix[j].push(value);
        }
    }

    return matrix;
}

const img = [[0, 1, 2], 
             [1, 2, 3],
             [2, 3, 4]];

console.log(rotate(img));
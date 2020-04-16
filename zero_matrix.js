function zeroMatrix(matrix) {
    let rowIdx = new Array(matrix.length);
    let colIdx = new Array(matrix[0].length);
    for (let r = 0; r < matrix.length; r++) {
        for(let idx = 0; idx < matrix[0].length; idx++) {
            if (matrix[r][idx] === 0) {
                rowIdx[r] = true;
                colIdx[idx] = true;
            }
        };
    };

    rowIdx.forEach((row, idx) => {
        if (rowIdx[idx]) nullifyRow(matrix, idx);
    });

    colIdx.forEach((col, idx) => {
        if (colIdx[idx]) nullifyCol(matrix, idx);
    });

    return matrix;
}

function nullifyRow(matrix, idx) {
    matrix[idx].forEach((el, rowIdx) => {
        matrix[idx][rowIdx] = 0;
    });
}

function nullifyCol(matrix, idx) {
    matrix.forEach(row => {
        row[idx] = 0;
    });
}
const matrix = [[1, 2, 0],
                [2, 0, 4],
                [0, 1, 2]];
console.log(zeroMatrix(matrix));
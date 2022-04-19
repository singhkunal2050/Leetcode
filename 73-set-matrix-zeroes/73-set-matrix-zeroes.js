/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/// Approach => Linear Traverse all items => check for 0 => store 2 arrays for zero indexes and then traverse again and compare coords with dummy arrays


var setZeroes = function(matrix) {
    
    // r [-1,0,-1]
    // c [-1,0,-1]

  //      j 
  //   [1,1,1]
  // i [1,0,1]
  //   [1,1,1]


    let rows = new Array(matrix.length).fill(-1)
    let cols = new Array(matrix[0].length).fill(-1)
    
    for(let i =0;i<matrix.length ; i++){
        for(let j=0 ; j<matrix[i].length ; j++){
            if(matrix[i][j]==0){
                rows[i] = 0
                cols[j] = 0
            }
        }
    }
    
    for(let i =0;i<matrix.length ; i++){
        if(rows[i]==0){
            matrix[i].fill(0);
        }
        for(let j=0 ; j<matrix[i].length ; j++){
            if(cols[j]==0){
                matrix[i][j]=0;
            }
        }
    }
    
    
    console.log(matrix)
};
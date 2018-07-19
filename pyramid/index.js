function pyramid(n, row=0, stair=''){
    if(n === row) {
        return; 
    }

    const middle = Math.floor((n * 2 - 1) / 2)
    if (stair.length === n * 2 - 1) {
        console.log(stair);
        return pyramid(n, row+1);
    }

     if (stair.length >= middle - row && stair.length <= middle + row) {
         stair += '#';
     } else {
         stair += ' ';
     }

    pyramid(n, row, stair);
}






function pyramidV1(n){
    const middle = Math.floor((2 * n -1) / 2)

    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let col = 0; col < 2 * n -1 ; col++) {
             if(middle -row <= col && middle+row >=col){
                 stair += '#';
             } else {
                 stair += ' ';
             }     
        }
        console.log(stair);
        
    }
}

pyramid(6);
module.exports = pyramid;
function steps(n, row = 0, stair=''){
    if(n === row) {
        return;
    }

    if(n === stair.length){
        console.log(stair); 
        return steps(n, row+1);
    }

    if(stair.length <= row) {
        stair += '#';
    }else {
        stair +=' ';
    }

    steps(n, row , stair);


}


function stepV2(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if(column <= row){
                stair += '#';
            }else {
                stair += ' ';
            }
            
        }
        console.log(stair);    
    }
}


function stepsV1(n) {
    for (let i = 1; i <= n; i++) {
        console.log(hastag(i)+space(n-i))
    }
}

function hastag(n){
    let result = '';
    for (let i = 0; i <n; i++) {
        result += '#'
    }

    return result;
}

function space(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ' '
    }

    return result;
}
console.log(steps(4));

module.exports = steps;
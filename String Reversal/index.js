function reverse(str) {

    return str.split('').reduce((reversed, character) => character + reversed, '');
     
}

function reverseV1(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

function reverseV2(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}


module.exports = reverse;
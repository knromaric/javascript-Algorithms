
function palindrome(str) {
    return str.split('').every((char, index)=>{
        return char === str[str.length - index - 1];
    })
}


function palindromeV1(str){
    const reversed = str.split('').reduce((rev, char) => char + rev, '');

    return str === reversed;
}
module.exports = palindrome; 
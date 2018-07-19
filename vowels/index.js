function vowels(str) {
    const matches =str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}


function vowelsV1(str) {
    let countVowels = 0;
    const vowelChecker = ['a', 'e', 'i', 'o','u'];

    for (let i = 0; i < str.length; i++) {
        if(vowelChecker.includes(str[i])) {
            countVowels ++;
        }      
    }

    return countVowels;
}

module.exports = vowels;
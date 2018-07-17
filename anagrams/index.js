function anagrams(stringA, stringB){
    const strArrayA = cleanString(stringA);
    const strArrayB = cleanString(stringB);

   return strArrayA === strArrayB;

}

function cleanString(str) {
    return str.replace(/[^\w]/g, "")
              .toLowerCase().split('')
              .sort()
              .join('');
}

function anagramsV1(stringA, stringB){
    const mapA = generateCharacterMap(stringA);
    const mapB = generateCharacterMap(stringB);
    let result = true;

    if (Object.keys(mapA).length === Object.keys(mapB).length) {
        for (const key in mapA) {
            if (mapA[key] !== mapB[key]) {
                result = false;
            }
        }
    } else {
        result = false;
    }

    return result;
}

function generateCharacterMap(str){
    let map = {};
    str.replace(/[^\w]/g, "").toLowerCase();

    for (const chr of str) {
        if(map[chr])
            map[chr] += 1;
        else
            map[chr] = 1;
    }

    return map;
}

module.exports = anagrams;
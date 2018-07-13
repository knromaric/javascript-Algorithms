function maxChar(str) {
    let map = {}; 
    let max = 0;
    let maxChar = '';
    for (const char of str) {
        if(!map[char])
            map[char] = 1;
        else
            map[char] ++;
    }

   for(let char in map){
       if(map[char] > max){
           max = map[char];
           maxChar = char; 
       }
   }
   
   return maxChar;
}

module.exports = maxChar;
function capitalize(str) {
   let result = str[0].toUpperCase();

   for (let i = 1; i < str.length; i++) {
       if(str[i-1] === ' '){
           result += str[i].toUpperCase();
       } else {
           result += str[i];
       }   
   }

   return result;
}

console.log(capitalize("i was there before you"));

function capitalizeV1(str) {
     let words = [];
     for (let word of str.split(' ')) {
         words.push(word[0].toUpperCase() + word.slice(1));
     }

     return words.join(' ');
}

module.exports = capitalize;

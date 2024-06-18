/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function removeLastVowel(word){
    let wordArr = word.split('')
    let vowels = 'aeiouAEIOU'
    for(let i = word.length - 1; i >= 0; i--){
        let letter = wordArr[i];
        if(vowels.includes(letter)){
         wordArr.splice(i, 1)
         return wordArr.join('')   
        }        
    } return word;
}

// console.log(removeLastVowel('abootcmp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;

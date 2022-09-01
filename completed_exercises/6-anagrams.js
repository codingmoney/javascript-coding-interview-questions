// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanStr(str){
  return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')
}
function anagrams(stringA, stringB) {
 
  return cleanStr(stringA) === cleanStr(stringB)

}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));


// function charMap(str){
//   const charmap = {}
//   str = str.toLowerCase().replace(/[\W]/g,'')
//   for(let char of str){
//     charmap[char] = ++charmap[char] || 1
//   }
//   return charmap
// }

// function anagrams(stringA, stringB) {
//   //Step 1: Build Char Map for stringA
//   const charmapA = charMap(stringA)
  
//   //Step 2: Build Char Map for stringB
//   const charmapB = charMap(stringB)

//   //Step 3: Compare each character in the both the Char Maps
//   if(Object.keys(charmapA).length !== Object.keys(charmapB).length) return false

//   for(let key in charmapA){
//     if(charmapA[key]!== charmapB[key]) return false
//   }

//   return true

// }
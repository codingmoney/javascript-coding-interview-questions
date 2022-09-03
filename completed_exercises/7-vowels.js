// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0 

function vowels(str) {
 const vowelCheck = ['a', 'e','i', 'o', 'u']

 let count = 0

 for(let char of str.toLowerCase()){
  if(vowelCheck.includes(char)) count++
 }

 return count
}

console.log(vowels('Coding Money'));

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
//  }
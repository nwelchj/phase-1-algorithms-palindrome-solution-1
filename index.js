


  // Write your algorithm here

function resverse(word){
  const wordAray = word.split('')
  const resverseWordArray = wordAray.reverse()
  const resverseWord = resverseWordArray.join('')
  return resverseWord;
}





function isPalindrome(word){
  const resverseWord = resverse(word)
  
  if (word === resverseWord){
    return true}
    else{
      return false
    }
  }


/* 
  Add your pseudocode here
 want to take the reverse word and retuen true or false 

 word === resverse word
    return true

*/

/*
  Add written explanation of your solution here 
  took in a argument "word " 
  made it into a array because we  cannot reverse a string in javssript
  took the array spit it 
  reversed the Array
  joined the array back up agian 
  took the return and sent it to the function isPalindrone 
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

}

module.exports = isPalindrome;

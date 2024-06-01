// function isPalindrome(str){
  const words = ["racecar","nitin","Rama"]

  function isPalindrome(word) {
    let rev = "";
    for (let i = word.length - 1; i >= 0; i--) {
      rev += word[i];
    }
    if (rev == word) {
      return true
    } else {
      return false;
    }
  }
  
  let word1 = "racecar";
  let word2 = "nitin";
  let word3 = "Rama";
  
  console.log(isPalindrome(word1));
  console.log(isPalindrome(word2));
  console.log(isPalindrome(word3));
  




  


/* 
  Add your pseudocode here
   declare a function named isapalindrome
   check the parameters of the function
   reverse the string
   check if the reversed string is equal to the original string
   return true or false
   end the function
*/

/* 
  Add written explanation of your solution here
 
*/                                                                                                                                                                                                                                                                                                                                                                                                                                    

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;



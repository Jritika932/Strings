// Count the Vowels and Consonants
// You are given a string 
// S
//  containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.


var Count_Vowels= (S) => 
{
       const vowels = S.match(/[aeiou]/gi); 
  return vowels.length;
};
var Count_Consonants= (S) => 
{
        const consonants = S.match(/[^aeiou]/gi);
  return consonants.length
};
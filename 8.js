 
// Plaindrome Check
// You are given a string 
// S
// , Your task is to check wether the given string is a 
// P
// a
// l
// i
// n
// d
// r
// o
// m
// e
//  or not.

// A 
// P
// a
// l
// i
// n
// d
// r
// o
// m
// e
//  is a string, which turnout same when read in reverse direction.
// Example: "naman" is a Palindrome.
// String can contain both upppercase lowercase letters.

// Note: You have to complete Plain_Check function. No need to take any input





 var Palin_Check = (str) =>
 {
 	 	 var i = 0, j = str.length - 1
 
         while (i < j) {
 
            
             if (str.charAt(i) != str.charAt(j))
                 return "False";
 
            
             i++
             j--
         }
         return "True";
	 
}



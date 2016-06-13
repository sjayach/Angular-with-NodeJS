function isPalindrome(arg) {
  var palindrome = true;
  for ( var i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[(arg.length - 1) - i]) {
      console.log('false');
      return;
    }
  }
   
  console.log('true');
}

isPalindrome('kayak');
isPalindrome('cook');

function palindrome(str) {

  
    let i = 0,j=str.length-1;
    while( ( i <= str.length/2 ) && ( j >= str.length/2 ) ){
         if(/[a-zA-Z0-9]/.test(str[i])){
            if(/[a-zA-Z0-9]/.test(str[j])){
                  if( str.charAt(i).toLowerCase() != str.charAt(j).toLowerCase() )
                                           return false;
                  else{
                     i++; j--;
                  }
            }
            else j--;
         }
         else i++;
    }
    return true;
  }
  palindrome("almostomla");
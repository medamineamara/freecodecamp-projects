function rot13(str) {
  
    function shifter(x){ // function to shift a single UPPERCASE alphabetic caractere
          if( (x.charCodeAt(0)-13)<65)
                          return String.fromCharCode(x.charCodeAt(0)-13+26)
          else return String.fromCharCode(x.charCodeAt(0)-13)
         }
     let newStr =""; //making a string by shifting only UPPERCASE alphabetic caracteres
     for(let i = 0; i < str.length ; i++){
          if( /[A-Z]/.test(str[i]) ) newStr = newStr + shifter(str[i])
          else newStr = newStr + str[i] 
         }
     //console.log(newStr)
     return newStr;
  }
  
  rot13("SERR PBQR PNZC");
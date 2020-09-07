function telephoneCheck(str) {
    //****** Telephone Number Validator *****/
    //validate the string characteres
    let regEx = /^[0-9 ()-]*$/g ;
         if(! regEx.test(str))return false;
    //the number length without the special characters
    let arr = str.split(/[^0-9]/);
    arr = arr.filter(item => item != '');
    let newStr = arr.join("");
    if(newStr.length == 11 && newStr[0] != '1') return false;
    if(newStr.length != 10 && newStr.length != 11) return false;
    
    //start and end of the number 
     if((str[0]=='(' && str[str.length-1]==')') || str[0]=="-" )
                                                  return false;
     //creating a stack to test the parentheses
     let ch = [];
     for(let i = 0; i < str.length ; i++){
             if(str[i]=="(")
                               ch.push(str[i])
             if(str[i]==")"){ if(ch.length == 0)return false;
                              if(ch[ch.length-1] == "(")ch.pop();
                              else ch.push(str[i]);
                             }
          }
     if(ch.length != 0) return false;
  
       
    return true;
  }
  
  telephoneCheck("(555)555-5555");
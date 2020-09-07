function convertToRoman(num) {
    let roman = [ ["M",0],["D",0],["C",0],['L',0],
                   ["X",0],["V",0], ["I",0] ];
   
    // divide the number to complete the roman table
    let initial = 1000;
    for(let i = 0 ; i < roman.length;i++){
            roman[i][1] = Math.floor(num/initial);
            num = num - initial * roman[i][1];
              if( i%2 == 0)
                           initial /= 2;
                 else 
                          initial /= 5;
        }
   //make a string from the roman table
    let str ="";
    for(let i = roman.length-1 ; i >=0 ; i--){
       //test for 9
          if(roman[i][1]==4 && roman[i-1][1]==1){
                     str = roman[i][0] +roman[i-2][0] +  str;
                     roman[i-1][1]=0;
              }
       //test for 4
          else if(roman[i][1]== 4)str = roman[i][0] + roman[i-1][0]  + str;
       // for 1,2 and 3
          else if(roman[i][1]!=0 ) str = roman[i][0].repeat(roman[i][1])+str;
       }
    
    return str;
   }
   
   convertToRoman(2);
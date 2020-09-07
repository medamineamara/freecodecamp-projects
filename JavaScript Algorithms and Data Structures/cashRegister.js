function checkCashRegister(price, cash, cid) {
    // function to calculate the total of an array of coins and bills
    let calculateTotal = (item) => item.reduce( (acc,curr) => acc + curr[1], 0 )
    // simplify the problem by testing only on totals
    let totalChange = cash-price
    let totalCash = calculateTotal(cid) // the total in the register
    if( totalChange == totalCash )
                return {status: "CLOSED",change : cid}
    else if(totalChange > totalCash)
                return {status:"INSUFFICIENT_FUNDS",change : [] }
    //an array of the value of each coin and bill
    let valueOfCurrency = [0.01,0.05,0.1,0.25,1,5,10,20,100]
    //an array of the change coins and bills ( set to zero)
    let changeArray = cid.map( (item) => {return [item[0],0]})
    //iterate through all coins and bills
    for(let i = 8 ; i >= 0 ; i--){
             while(totalChange !=0 && cid[i][1] !=0 && valueOfCurrency[i] <= totalChange){
                changeArray[i][1] += valueOfCurrency[i];
                cid[i][1] -= valueOfCurrency[i];
                totalChange -= valueOfCurrency[i];
                totalChange = parseFloat(totalChange.toFixed(2))
             }    
      }
      
    if(totalChange != 0) return {status:"INSUFFICIENT_FUNDS",change : [] }
    changeArray = changeArray.filter(item => item[1]!=0)
    return {status:"OPEN",change : changeArray.reverse() };
  }

  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
  ["ONE", 90], ["FIVE", 55],["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
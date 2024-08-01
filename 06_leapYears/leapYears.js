const leapYears = function(year) {
    let isDivisibleByFour = year % 4 == 0
    let isDivisibleByOnehundred = year % 100 == 0
    let isDivisibleByFourHundred = year % 400 == 0
    
    
    if(isDivisibleByFour && (!isDivisibleByOnehundred || isDivisibleByFourHundred)){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

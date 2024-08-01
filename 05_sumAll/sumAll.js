const sumAll = function(starting,ending) {
    if(starting <= 0 || ending <= 0) return 'ERROR'
    if(!Number.isInteger(starting) || !Number.isInteger(ending)) return 'ERROR'

    let min = (starting > ending) ? ending : starting
    let max = (starting > ending) ? starting : ending

    let sum = 0

    for(let i= min;i <= max; i++){
        sum +=i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;

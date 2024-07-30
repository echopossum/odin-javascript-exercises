const removeFromArray = function(startingArray, ...args) {
    let newArray = []
    startingArray.forEach(element => {
        let flag = false;
        for (let i = 0; i < args.length; i++) {
            if(args[i] === element){
                flag = true;
            }
        }
        if(!flag){
            newArray.push(element)
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

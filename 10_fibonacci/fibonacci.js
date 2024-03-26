const fibonacci = function(countArg) {
    let count;
    if(countArg != Number){
        count = parseInt(countArg);
    }
        count = countArg
    if(countArg < 0) return "OOPS";
    if(countArg == 0) return 0;

    let firstPrev = 1;
    let secondPrev =0;
    for(i=2;i<=countArg;i++){
        let current  =  firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;

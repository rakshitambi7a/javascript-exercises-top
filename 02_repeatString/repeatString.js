const repeatString = function(string,times) {
    let stringToReturn='';
    if(times<0){
        return 'ERROR';
    }
    for(let i=0;i<times;i++){
        stringToReturn+=string;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;

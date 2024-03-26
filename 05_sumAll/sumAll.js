const sumAll = function(from, to) {
    if((!Number.isInteger(from)||!Number.isInteger(to))|| (from<0 || to<0)){
        return "ERROR";
    }
    else{
        let sum = 0;
    if(to<from){
        [from,to]=[to,from];
    }

    for(let i = from;i<=to;i++){
        sum+=i;
    }
    return sum;
}

};
// Do not edit below this line
module.exports = sumAll;

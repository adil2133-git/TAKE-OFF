function calculate(num1, num2, callback){
    return callback(num1, num2)
}

function additon(a,b){
 return a + b
}


console.log(calculate(2,4,additon))
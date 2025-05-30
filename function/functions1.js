function HandleEven(){
    console.log("Even number detected");    
}

function HandleOdd(){
    console.log("Odd number detected");
}
function HandleNum (number, callback){
    if (number % 2 === 0) {
        HandleEven();
    } else {
        HandleOdd();
    }
}

HandleNum(5, HandleEven, HandleOdd);
HandleNum(10, HandleEven, HandleOdd);






function CountDown(num){

    if(num<0) return ;
    logMessage(num);
    CountDown(num-1)
}

function logMessage(count){
 console.log(`Countdown: at ${count}`);    
}

CountDown(3)

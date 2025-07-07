function timer(duration,onComplete){
   
    setTimeout(() => {
         onComplete (`Timer of ${duration} ms is finished`)
    }, duration);
    
}


timer(2000,function(msg){
    console.log(msg)
})



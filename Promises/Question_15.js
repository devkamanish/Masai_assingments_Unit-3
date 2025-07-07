 


function startTask(){
    return new Promise((res)=>{
        setTimeout(() => {
            res("Task A completed")
        }, 1000);
    })
}


function processTask(input){
    return new Promise((res)=>{
        setTimeout(() => {
            res(`Task B processed : ${input}`)
        }, 1500);
    })
}

function finalizeTask(input){
return new Promise((res)=>{
    setTimeout(() => {
        res(`Final result : ${input}`)
    }, 500);
})
}

startTask()
.then((resA)=>{
    console.log(resA);
    return processTask(resA)
})
.then((resB)=>{
    console.log(resB);
    return finalizeTask(resB)
})
.then((finalRes)=>{
    console.log(finalRes)
})
.catch(console.error)  



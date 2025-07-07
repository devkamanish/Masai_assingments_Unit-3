
function checkEvenNumber(num){
  return new Promise((res,rej)=>{
    if(num%2==0){
      res(`${num} is even`)
    }else {
        rej(`${num} is odd or invalid`)
    }
  })
}

checkEvenNumber(4)
.then(console.log)     // .then((res)=>console.log(res))
.catch(console.error)  // .catch((err)=>console.log(err))

checkEvenNumber(3)
.then(console.log)
.catch(console.error)





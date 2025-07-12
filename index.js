
function reminder(){

  const intervalId= setInterval(() => {
    console.log("Staty focused")
  }, 10000);

  setTimeout(() => {
  clearInterval(intervalId)
  console.log("Reminder stopped is stopped after 30 seconds")
}, 30000);
}


reminder()






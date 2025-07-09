
function fetchData() {

    return new Promise((res,rej)=>{

        setTimeout(() => {
            let success = Math.random()> 0.5  // here we are checking for 50% chance
            if(success){
                res("Fetched data successfully!")
            }else{
                rej("Something went wrong while fetching data.")
            }
        }, 1000);
    })
}

async function fetchDataHandler(){
  try{
    let res = await fetchData();
    console.log(res)
  }

  catch(err){
  console.log("Error fethching data: ",err)
  }
}
fetchDataHandler();




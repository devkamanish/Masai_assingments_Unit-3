  function personInfo(){  

    console.log(this.name, this.age)
  }


  let Info = {
   name : "manish devka",
   age : 22
  }


  personInfo.call(Info) 



  
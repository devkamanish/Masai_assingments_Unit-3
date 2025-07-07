    

async function userData() {
 let res = await fetch("https://jsonplaceholder.typicode.com/users")
 let data = await res.json();
 let names = data.map((ele)=> ele.name);
 console.log(names)
    
}


userData()
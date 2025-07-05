
 // upload , read, analyze and compile
// function uploadingFile(callback){
//   setTimeout(() => {
//     console.log("File is uploaded");
//     callback()
//   }, 1000);
// }

// function readingFile(callback){
//   setTimeout(() => {
//     console.log("Reading file");
//     callback();
//   }, 1000);
// }

// function analyze(callback){
//   setTimeout(()=>{
//     console.log("Analyzing file");
//     callback();
//   })
// }

// function Compile(){
//   setTimeout(() => {
//     console.log("Compiling file")
//   }, 1000);
// }


// uploadingFile(()=>{
//   readingFile(()=>{
//   analyze(()=>{
//     Compile()
//   })
//   })
// })



// uploadingFile();
// readingFile();
// analyze();
// Compile();



function uploadingFile(callback){
 return new Promise((res,rej)=>{
  setTimeout(() => {
     console.log("Uploading file");
     res()
  }, 1000);
 })
}

function readingFile(callback){
  return new Promise((res,rej)=>{
    setTimeout(() => {
      console.log("Reading file")
      res()
    }, 1000);
  })
}

function analyze(callback){
  return new Promise((res,rej)=>{
 setTimeout(()=>{
    console.log("Analyzing file");
    res()
  })
  })
 
}

function Compile(){
  setTimeout(() => {
    console.log("File is comple")
  }, 1000);
}

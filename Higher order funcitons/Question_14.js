 function  getEvenSquares(arr){
      let narr = arr.filter((ele)=> ele % 2 === 0);
        let square = narr.map((ele)=> ele * ele);
        console.log(square);
  }




  getEvenSquares([1, 2, 3, 4, 5, 6]);
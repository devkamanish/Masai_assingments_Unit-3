

function filterEvenNumbers(arr){
   return arr.filter(num => num% 2===0)

}
 
function sumOfArray(arr){
    return arr.reduce((acc,num)=>acc+num,0)
}

function sortAndConcat(arr1, arr2){
    let s1   = arr1.slice().sort((a,b)=>a-b);
    let s2 = arr2.slice().sort((a,b)=>a-b);
    return s1.concat(s2);
}


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfArray([1, 2, 3, 4, 5]));

console.log(sortAndConcat([4, 9, 6, 2],[5, 12, 7, 8, 3]));




let arr = [
    {
        product : "Laptop",
        price : 1000, 
        cateogry : "Electronics",  
    },
    {
        product : "Smartphone",
        price : 800, 
        cateogry : "Electronics",  
    },
    {
        product : "Tablet",
        price : 600, 
        cateogry : "Electronics",  
    },
    {
        product : "Headphones",
        price : 200, 
        cateogry : "Accessories",  
    },
    {
        product : "Smartwatch",
        price : 300, 
        cateogry : "Accessories",
    }
]



function  filtered(param){
    let narr = arr.filter((ele,ind)=>{
        return ele.cateogry === param;

    })
    console.log(narr)

}

filtered("Accessories"); // Should return the products in the Accessories category



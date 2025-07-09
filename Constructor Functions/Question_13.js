

function createInventoryItem(name , cateogry,price){

    let obj = {};
    obj.name = name;
    obj.cateogry = cateogry;
    obj.price = price;
    obj.describeItem = function(){
    console.log(`Item: ${this.name}, Category: ${this.cateogry}, Price: ${this.price}`)
    }

    return obj
}


function addItemDiscount(inventoryItem, discountPercent){
   let discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent/100);
  
   return {
    ...inventoryItem,
    discountPercent,
    discountedPrice,
    applyDiscount(){
        console.log(`Discounted price : ${this.discountedPrice}`)
    }
   }

}


let item = createInventoryItem("Laptop","Electronics",15000)
item.describeItem();

let discountPrice  = addItemDiscount(item,10);
discountPrice.applyDiscount()




 
 function createCounter(){
    let count = 0;
    
    return {
        increment :function() {
        count++;
        
        
    },

    getCount : function(){
        
        console.log(count);
    }
    }
 }

 let res = createCounter();
 res.increment(); // 1
 res.increment(); // 2  
 res.getCount(); // 2
    


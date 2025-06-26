
function outerFunction(){
    let age = 23;
    function innerFunction(){
        console.log("Age is: " + age);
    }

    innerFunction()
}

outerFunction();
function outerFunction() {
    let outerVal = 10;
    function innerFunction() {
        console.log("outerVar : ", outerVal);

    }
    return innerFunction;
}
exmp = outerFunction();
exmp();
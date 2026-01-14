// var num1 = 10
// let num2 = 20
// const num3 = 30
// num1 = 11
// num2 = 21
// // num3 = 31 you can reassign values to Constant
// only var allow reallocation
if (true) {
    var x = 10
    let y = 20
    const z = 30
    console.log("inside the block");
    console.log("x", x); //accessbile
    console.log("y", y);//accessbile
    console.log("y", y);//accessbile

}
console.log("outside the block");
console.log("x", x);//accessbile
console.log("y", y);//not accessbile
console.log("y", y);// not accessbile
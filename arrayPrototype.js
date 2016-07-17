var arr = [1, 2, 3, 4, 5];
console.log(arr.pop());
console.log(arr);
Array.prototype.deQueue = arr.shift;
Array.prototype.shift = function(){return "HI"};
console.log(arr.deQueue());
console.log(arr.shift());
console.log(arr);
console.log(arr.isPrototypeOf(arr.deQueue));
console.log(arr);
console.log("\n\n\n")
var arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2.deQueue());
function fun(...elem){ //rest Parameters
    console.log(elem);
    for(i in elem){
        console.log(arguments[i]);
    }
}
fun('aaa', 'bbb', 'ccc', 'ddd');
fun(1, 2, 3, 4, 5, 6);
fun([1, 3, 5]);
var arr = [1, 2, 3, 4, 5];
fun(...arr); // spread operator
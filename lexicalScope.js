var x;
function print(){
    console.log(x);
}
function func1(){
    x =10;
    print();
}
function func2(){
    x = 20;
    print();
}

func1();
func2();
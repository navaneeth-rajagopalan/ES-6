function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
}
//Write Your Code Below This Line

Square.prototype.isSquare = function(){
    if(this.A === this.B){
        if(this.C === this.D){
            if(this.A === this.C){
                console.log(true);
                return;
            }
        }
    }
    console.log(false);
}

var a = new Square(2,2,2,2);
a.isSquare();
var b = new Square(2,3,2,2);
b.isSquare();
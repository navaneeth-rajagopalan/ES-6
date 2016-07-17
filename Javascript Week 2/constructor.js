var Car = function (name, mileage, mSpeed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = mSpeed;
}


function processData(input) {
    var my_car = new Car(input[0], input[1], input[2]) 
    console.log(my_car.name);
    console.log(my_car.mileage);
    console.log(my_car.max_speed);
} 


processData(['Swift',20,120]);
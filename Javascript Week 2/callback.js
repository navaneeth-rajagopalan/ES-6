function myFilter(my_array, callback){
     return my_array.filter(callback);
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray, function(a){
        if(a%2){
            return false;
        }
        else{
            return true;
        }
    }));   
} 


processData([1,2,3,4,5,6,7])
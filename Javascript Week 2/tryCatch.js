function processData(my_string) {
    var rev;
    try{
        rev = my_string.split("").reverse().join('');
        console.log(`Reversed string is : ${rev}`);
    }
    catch(ex){
        console.log(`Error : ${ex.message}`);
    }
    finally{
        console.log(`Type of my_string is : ${typeof(my_string)}`)
    }
    
} 


processData('navaneeth')
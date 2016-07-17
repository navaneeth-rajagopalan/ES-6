// complete the function
function vowelsAndConsonants(s) {
    var cons = [];
    for(var i=0, len=s.length; i<len; i++){
        if(s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u'){
            console.log(s.charAt(i));
        }
        else{
            cons.push(s.charAt(i));
        }
    }
    for(var c of cons){
        console.log(c);
    }
}

var s = "javascriptloop"
vowelsAndConsonants(s);
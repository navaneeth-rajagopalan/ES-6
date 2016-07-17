'use strict';
function loadProfiles(list){
    let i;
    for (i in list){
        console.log(list[i]);
        setTimeout(function() {
            console.log(i+" "+list[i]);
        }, 500);
    }
}
const MAX = function (a, b){
    return (a>b? a: b);
}
//const MAX = 5;
console.log(MAX(5,7));
if(1>3){
    const test = 'hi';
}
else{
    console.log("Else");
}
console.log(test);
var userName = ['aaa', 'bbb', 'ccc', 'ddd'];
loadProfiles(userName);
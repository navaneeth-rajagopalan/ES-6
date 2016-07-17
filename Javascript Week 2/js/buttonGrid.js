var btnID="btn";
var arr =[1,2,3,6,9,8,7,4];
arr = arr.reverse();
var count = 0;
var btn5 = document.getElementById("btn5");
btn5.onclick = function () {
    count++;
    for(var i=0,len=arr.length;i<len;i++){
        var btn = document.getElementById(btnID+arr[i]);
        btn.innerHTML = arr[(i+count)%len].toString();
    }            
}

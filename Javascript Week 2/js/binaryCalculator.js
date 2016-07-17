document.getElementById("btn0").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '0';
}
document.getElementById("btn1").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '1';
}
document.getElementById("btnClr").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML = '';
}
document.getElementById("btnEql").onclick = function(){
    var res = document.getElementById("res"),
    exp = res.innerHTML, result, e1,e2;
    try{
        if(exp.includes("+")){
            e1 = parseInt(exp.split("+")[0],2);
            e2 = parseInt(exp.split("+")[1],2);
            result = e1+e2;
        }
        if(exp.includes("-")){
            e1 = parseInt(exp.split("-")[0],2);
            e2 = parseInt(exp.split("-")[1],2);
            result = e1 - e2;
        }
        if(exp.includes("*")){
            e1 = parseInt(exp.split("*")[0],2);
            e2 = parseInt(exp.split("*")[1],2);            
            result = e1 * e2;
        }
        if(exp.includes("/")){
            e1 = parseInt(exp.split("/")[0],2);
            e2 = parseInt(exp.split("/")[1],2);
            result = e1 / e2;
        }
        res.innerHTML = result.toString(2);
    }
    catch(ex){
        
    }
}
document.getElementById("btnSum").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '+';
}
document.getElementById("btnSub").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '-';
}
document.getElementById("btnMul").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '*';
}
document.getElementById("btnDiv").onclick = function(){
    var res = document.getElementById("res");
    res.innerHTML += '/';
}
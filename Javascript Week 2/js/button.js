var btn = document.createElement("button");

btn.id="btn";
btn.className="btnClass"
btn.innerHTML = "0";
btn.onclick = function(){
    var button = document.getElementById("btn"),
    val = Number(button.innerHTML);
    button.innerHTML = (++val).toString();        
}

document.body.appendChild(btn);
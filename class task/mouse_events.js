//onmouseover
function mouseover(e)
{
    btn.style.background="yellow";
}

//onmouseout
function mouseout(e){
    btn.style.background="brown";
}

//onclick
btn.onclick=function mouseover(){
    alert("Hello event")
}

//onmousedown()
paragraph.onmousedown=function mousedown(e){
    paragraph.style.color="purple";
}
paragraph.onmouseup=function mouseup(e){
    paragraph.style.color="green";
}


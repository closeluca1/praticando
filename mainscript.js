//página unica de js, procure pelo ctrl+f a palavra chave

//make you nav start code
function changeliwidth(){
    let liwidth = document.getElementById("li-width").value;
    let changewidhth = document.querySelectorAll("li");
    for (i = 0; i < changewidhth.length; i++)
    changewidhth[i].style.width = liwidth;
    document.getElementById("final-li-width").innerHTML = "width: " + liwidth + ";";
};
function changeliheight(){
    let liheight = document.getElementById("li-height").value;
    let changeheight = document.querySelectorAll("li");
    for (i = 0; i < changeheight.length; i++)
    changeheight[i].style.height = liheight;
    document.getElementById("final-li-height").innerHTML = "height: " + liheight + ";";
};
function changelibg(){
    let libg = document.getElementById("li-bg").value;
    let changebg = document.querySelectorAll("li");
    for (i = 0; i < changebg.length; i++)
    changebg[i].style.background = libg;
    document.getElementById("final-li-bg").innerHTML = "background: " + libg + ";";
};
function changeliborder(){
    let liborder = document.getElementById("li-border").value;
    let changeborder = document.querySelectorAll("li");
    for (i = 0; i < changeborder.length; i++)
    changeborder[i].style.borderColor = liborder;
    document.getElementById("final-li-border").innerHTML = "border: 1px solid " + liborder + ";";
};//make your nav finish code

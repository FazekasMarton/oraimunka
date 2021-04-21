function colorc(){
    var a = 123;
    var color = [0, 0, 0];
    for(i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random() * 256);
    }
    var szin = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    document.getElementById("gomb").style.background = szin;
}
function hozzaad(){
    var box = document.getElementById("doboz").value;
    var szoveg = document.createElement("H4");
    szoveg.innerText = box;
    document.getElementById("asd").appendChild(szoveg);
}
function torol(){
    document.getElementById("asd").removeChild(document.getElementById("asd").lastChild);
}
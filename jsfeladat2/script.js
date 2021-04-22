function colorc(){
    var a = 123;
    var color = [0, 0, 0];
    var color2 = [0, 0, 0];
    for(i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random() * 256);
        color2[i] = 255 - color[i];
    }
    var szin = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    var szin2 = "rgb(" + color2[0] + "," + color2[1] + "," + color2[2] + ")";
    document.getElementById("gomb").style.background = szin;
    document.getElementById("gomb").style.color = szin2;
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
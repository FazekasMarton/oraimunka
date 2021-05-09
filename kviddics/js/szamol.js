function fv(){
    var y =  parseInt(document.getElementById("1").value);
    var x =  parseInt(document.getElementById("2").value);
    if(y < 0){
        document.getElementById("1").value = 0;
        y = 0;
        alert("Az érték nem lehet negatív!");
    }
    if(x < 0){
        document.getElementById("2").value = 0;
        x = 0;
        alert("Az érték nem lehet negatív!");
    }
    if(x > 1){
        document.getElementById("2").value = 1;
        x = 1;
        alert("Az aranycikeszt csak egyszer lehet elkapni!");
    }
    document.getElementsByTagName("span")[0].innerText = y*10+x*150;
}
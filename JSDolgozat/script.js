function kep(a, b){
    var x = "<img src=\""+ a +"\" alt=\"asd\"><span id=\"x\" onclick=\"torol()\">x</span><span id=\"name\">"+ b +"</span>";
    document.getElementById("nagykep").innerHTML = x;
}
function torol(){
    document.getElementById("nagykep").innerHTML = "";
}
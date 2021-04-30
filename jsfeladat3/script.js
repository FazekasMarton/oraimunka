var szam = 21;
var fac = 1;
    document.getElementsByTagName("body")[0].appendChild(document.createElement("table"));
    document.getElementsByTagName("table")[0].appendChild(document.createElement("tr"));
    var y = "<td>0!</td><td>1</td>";
    document.getElementsByTagName("tr")[0].innerHTML = y;
    for(i = 1; i < szam; i++){
        fac = fac*i;
        document.getElementsByTagName("table")[0].appendChild(document.createElement("tr"));
        var x = "<td>"+i+"!</td><td>"+fac+"</td>";
        document.getElementsByTagName("tr")[i].innerHTML = x;
    }

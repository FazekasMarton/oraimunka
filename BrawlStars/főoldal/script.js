  var a = "brawler";
  var b = "brawler";
  var c = "brawler";

  function filter(fi){
    a = fi;
    b = fi;
    c = fi;
    proba();
  }
  function elso(el){
    a = el;
    proba();
  }
  function masodik(ma){
    b = ma;
    proba();
  }
  function harmadik(har){
    c = har;
    proba();
  }

  function proba(){

    if(a == "nonea"){
      a == "brawler";
    }
    if(b == "noneb"){
      b == "brawler";
    }
    if(c == "nonec"){
      c == "brawler";
    }

    var x = document.getElementsByClassName("brawler");
    for(i = 0; i < x.length; i++){
      x[i].style.display='none';
    }
    for(i = 0; i < x.length; i++){
      y = a;
      for(z = 0; z < 4; z++){
        if(x[i].classList[z] == y){
          y = b;
          for(z = 0; z < 4; z++){
            if(x[i].classList[z] == y){
              y = c;
              for(z = 0; z < 4; z++){
                if(x[i].classList[z] == y){
                  x[i].style.display='block';
                }else{
                }
              }
            }else{
            }
          }
        }else{
        }
      }
    }
  }

  function myFunction() {
    var input, filter, br, p, i, txtValue;
    input = document.getElementById("keres");
    filter = input.value.toUpperCase();
    br = document.getElementsByClassName("brawler");
    for (i = 0; i < br.length; i++) {
        p = br[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            br[i].style.display = "block";
        } else {
            br[i].style.display = "none";
        }
    }
}
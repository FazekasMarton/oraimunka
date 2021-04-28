var y = 'semmi';
var x = 0;
var ea = 'asd';
var rszam = 0;
var nyert = 0;  
setTimeout(function(){meret();},0);
setTimeout(function(){elok();},0);

function meret(){
  var size = document.getElementById("meret").value;
  document.getElementById("asd").innerHTML = size+'px';
  for(i = 0; i < document.getElementsByClassName("flip-card").length; i++){
    document.getElementsByClassName("flip-card")[i].style.width=size+'px';
    document.getElementsByClassName("flip-card")[i].style.height=size+'px';
    document.getElementsByClassName("flip-card")[i].style.margin=size/10+'px';
  }
  setTimeout(function(){meret();},0);
}

function flip(event,a,b){
  if (b!=y && x!=2){
	var element = event.currentTarget;
	if (element.className === "flip-card-inner" && !(document.getElementById(b).classList.contains('pont'))){
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
    x++;
    if(x==2){
      if(a==ea){
        document.getElementById(b).classList.add('pont');
        document.getElementById(y).classList.add('pont');
        nyert++;
        nyert++;
        x = 0;
        y = 'semmi';
        if(nyert==document.getElementsByClassName("flip-card").length){
          setTimeout(function(){alert('Gratulálok! Megytaláltad az összes párt!');},500);
       }
      }else{
        setTimeout(function(){visszafordit();},1500);
      }
        
    }else{
      ea = a;    
      y = b;
    }
  }
  }
}

function visszafordit(){
  var card = document.getElementsByClassName("flip-card-inner");
      for(i = 0; i < card.length; i++){
        if(card[i].style.transform == "rotateY(180deg)" && !(card[i].classList.contains('pont'))){
          card[i].style.transform = "rotateY(0deg)";
        }
      }
    x = 0;
    y = 'semmi';
}

function elok(){
  document.getElementsByClassName("wrapper")[0].remove();
  document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).classList.add("wrapper");


  var maximum= document.getElementById("szam").max;
  var darab = document.getElementById("szam").value;
  var kor = 0;

  if(darab<2){
    darab=2;
    document.getElementById("szam").value="2";
  }else{
    if(darab>maximum){
      darab=maximum;
      document.getElementById("szam").value=maximum;
    }
  }

  for(i = 0; i < darab; i++){
    for(z = kor; z < kor+2; z++){
      document.getElementsByClassName("wrapper")[0].appendChild(document.createElement("div")).classList.add("flip-card");
      document.getElementsByClassName("flip-card")[z].appendChild(document.createElement("div")).classList.add("flip-card-inner");
      document.getElementsByClassName("flip-card-inner")[z].id = z;
      document.getElementsByClassName("flip-card-inner")[z].setAttribute("onclick", "flip(event, "+i+" ,this.id)");
      document.getElementsByClassName("flip-card-inner")[z].appendChild(document.createElement("div")).classList.add("flip-card-front");
      document.getElementsByClassName("flip-card-front")[z].innerHTML = "<img class=\"front\" alt=\"front\">";
      document.getElementsByClassName("front")[z].src = "img/front.png";
      document.getElementsByClassName("flip-card-inner")[z].appendChild(document.createElement("div")).classList.add("flip-card-back");
      document.getElementsByClassName("flip-card-back")[z].innerHTML = "<img class=\"back\" alt=\"back\">";
      document.getElementsByClassName("back")[z].src = "img/"+i+".png";   
    }
    kor++;
    kor++;
  }
  var k = document.getElementsByClassName("flip-card-inner");
  var r = document.getElementsByClassName("flip-card");
  for(i = 0; i < k.length; i++){
    rszam = Math.floor(Math.random() * 100);
    r[i].style.order=rszam;
  }
}
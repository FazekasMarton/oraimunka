var y = 'semmi';
var x = 0;
var ea = 'asd';
var rszam = 0;
var nyert = 0;  
var darab = 16;
setTimeout(function(){kever();},0);
setTimeout(function(){meret();},0);

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

function elok(){
  var k = document.getElementsByClassName("flip-card-inner");
  for(i = 0; i < k.length; i++){
    if(k[i].classList.contains('pont')){
    k[i].classList.remove('pont');
  }
  }
    visszafordit();
    setTimeout(function(){kever();},500);
    nyert = 0;
}

function kever(){
  var ereddarab = document.getElementsByClassName("flip-card").length/2;
  document.getElementById("szam").max=ereddarab;
  var k = document.getElementsByClassName("flip-card-inner");
  var r = document.getElementsByClassName("flip-card");
  darab = document.getElementById("szam").value;
  if(darab<2){
    darab=2;
    document.getElementById("szam").value="2";
  }else{
    if(darab>ereddarab){
      darab=ereddarab;
      document.getElementById("szam").value=ereddarab;
    }
  }
    darab = darab*2;
  for(i = 0; i < r.length; i++){
    r[i].style.display='none';
  }
  for(i = 0; i < darab; i++){
    r[i].style.display='block';
  }
  for(i = 0; i < k.length; i++){
    rszam = Math.floor(Math.random() * 100);
    r[i].style.order=rszam;
  }
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
        if(nyert==darab){
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
    var x = document.getElementsByTagName("td");
function alap(){
    for(i = 0; x.length > i; i++){
        x[i].innerHTML = '';
    }
    document.getElementsByTagName("span")[0].innerHTML = '';
}
function meg(){
    for(i = 0; x.length > i; i++){
        if(x[i].classList[0] == 'red'){
            x[i].innerHTML = '6';
        }else{
            if(x[i].classList[0] == 'blue'){
                x[i].innerHTML = '3';
            }else{
                if(x[i].classList[0] == 'gray'){
                    x[i].innerHTML = '9';
                }
            }
        }
    }
    document.getElementsByTagName("span")[0].innerHTML = '996';
}
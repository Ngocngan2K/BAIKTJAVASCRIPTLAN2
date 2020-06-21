window.onscroll=function(){
    var kc = document.documentElement.scrollTop;
    var menu = document.getElementById('menu');
    if(kc>119){
        menu.classList.add('hieuung');
    }
    else{
        menu.classList.remove('hieuung');
    }
    console.log(kc);
}

function opentimkiem(){
    var khung=document.getElementById('khung');

    if(khung.classList.contains('hieuung2')){
        khung.classList.remove('hieuung2');
    }
    else{
        khung.classList.add('hieuung2');
    }
    khung.classList.add('hieuung2');
}
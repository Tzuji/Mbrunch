let gift = 0 , ego = 1;

function condition(){ 
    
    if(gift == 0){
        gift = 1;
    }else{
        gift = 0;
    }

    if(ego == 1){
        ego1();
    }else if(ego ==2){
        ego2();
    }else{
        ego3();
    }
}

function ego1(){
    let imag = document.getElementById("ego");
    ego = 1;
    if(gift == 0){
        imag.style.backgroundImage = "url('ego/gift.png'),url('ego/1.png')";      
    }else{
        imag.style.backgroundImage = "url('ego/1.png')";
    }
}

function ego2(){
    let imag = document.getElementById("ego");
    ego = 2;
    if(gift == 0){
        imag.style.backgroundImage = "url(ego/gift.png),url(ego/2.png)";
    }else{
        imag.style.backgroundImage = "url(ego/2.png)";
    }
}

function ego3(){
    let imag = document.getElementById("ego");
    ego = 3;
    if(gift == 0){
        imag.style.backgroundImage = "url(ego/gift.png), url(ego/3.png)";
    }else{
        imag.style.backgroundImage = "url(ego/3.png)";
    }
}

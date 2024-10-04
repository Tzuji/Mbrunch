let gift = 0 , ego = 1;
let imag = document.getElementById("ego");

//ギフトの状態
function condition(){ 
    if(gift == 0){//0=ギフトあり 1=ギフトなし
        gift = 1;
    }else{
        gift = 0;
    }
    if(ego == 1){ //現在着ているEGOにギフトの状態を更新
        ego1();
    }else if(ego ==2){
        ego2();
    }else{
        ego3();
    }
}
//スーツ
function ego1(){
    ego = 1;
    if(gift == 0){
        imag.style.backgroundImage = "url('ego/gift.png'),url('ego/1.png')";      
    }else{
        imag.style.backgroundImage = "url('ego/1.png')";
    }
}
//HE　WAW
function ego2(){
    ego = 2;
    if(gift == 0){
        imag.style.backgroundImage = "url(ego/gift.png),url(ego/2.png)";
    }else{
        imag.style.backgroundImage = "url(ego/2.png)";
    }
}
//ALEPH
function ego3(){
    ego = 3;
    if(gift == 0){
        imag.style.backgroundImage = "url(ego/gift.png), url(ego/3.png)";
    }else{
        imag.style.backgroundImage = "url(ego/3.png)";
    }
}

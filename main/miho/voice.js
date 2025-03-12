const voices = ["んー、よろしく。私はミホ。","うわっっ!まーたコイツの作業かよ...!!","アンタもきっとすぐ慣れるよ。そういう風にこの会社は出来てるからサ。","飯は食える時に沢山食っとけ!死んでから後悔しても知らねーから。","あーあー、困った困った。また怒らせちゃったよ。ハハハ...。","あー、おい、アンタ....。私のタバコ知らないか?...そう、箱...さっきの鎮圧でどっか落としたっぽくてさ....。...はぁ。"];
number = ["音声1", "音声4", "音声5", "音声7", "音声8", "音声10"];
const voiceId = document.getElementById("voice");
const NumId = document.getElementById("voiceNum");
let count = 0;

function voice(){
    if(count == voices.length){
        count = 0;
        voiceId.innerHTML = voices[count];
        NumId.innerHTML = number[count];
        count += 1;
    }else{
        voiceId.innerHTML = voices[count];
        NumId.innerHTML = number[count];
        count += 1;
    }
}

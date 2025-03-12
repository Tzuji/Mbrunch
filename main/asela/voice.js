const voices = [".........。","...アセラ。好きに呼べばいい。","はぁ........。...管理人の命令だけを聞け。それだけだ。","...喚くな。喧しくて仕方がない...。","....死人が出た?...だから何だ、早く持ち場に戻れ。"],
number = ["音声1", "音声2", "音声4", "音声9", "音声11"];
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

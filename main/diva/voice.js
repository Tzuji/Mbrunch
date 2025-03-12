const voices = ["わ...よろしくね。私はディーバ。","今日も誰もいなくならないといいな...。","はは...作業って何回やっても緊張しちゃうな...。","アブノーマリティって動物みたいな見た目の子も多くて案外かわいいよね。かわいいとか言ってられないけど...。","ふあ.........。...寝不足かなあ。","たっ、たすけて～～～～!!!!わあああ!!!!"];
number = ["音声1", "音声2", "音声3", "音声5", "音声7", "音声14"];
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

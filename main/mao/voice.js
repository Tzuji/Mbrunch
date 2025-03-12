const voices = ["ふふ、私はマオ。仲良くしてね。","分からないことがあったら何でも聞いてね～。ココの職員じゃ長く勤めてる方だからさ。","顔色悪いね、大丈夫?怪我しちゃった?","ごめんね、今ちょっと忙しくって。","へぇ、死んじゃったんだ。あの子。","は、はぁ...?なんでこういう時に居ないんだよ。あの無能...。"];
number = ["音声1", "音声2", "音声4", "音声5", "音声14", "音声15"];
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

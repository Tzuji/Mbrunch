const voices = ["私のことはエミリアと呼んでくれ。...これからよろしく頼む。","......私は目が見えなくてね。迷惑を掛けることも多くなる...。","...なんだ？まだそこに居るのか...。","...お前が死んだところで弔ってやらんからな。そんなに暇じゃない。","隙あらば業務を放棄して...あいつは私と出会う前はどう凌いでたんだ?","...あぁ...、クソ、うるさいな....頭が痛い...。"];
number = ["音声1", "音声2", "音声6", "音声8", "音声9", "音声12"];
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

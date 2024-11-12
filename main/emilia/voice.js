const voices = ["エミリアと呼んでくれ。...これからよろしく頼む。","......私は目が見えなくてね。迷惑を掛けることも多くなる...。","...なんだ？まだそこに居るのか...。"],
voices2 = ["...お前が死んだところで弔わないからな。私はそんなに暇じゃない。","隙あらば業務を放棄して...あいつは私と出会う前はどう凌いでたんだ?","...あぁ...、クソ、うるさいな......ほんとうに。"];
let count = 0, count2 = 0;

function voice(){
    if(count == voices.length){
        count = 0;
        document.EmpForm.tex.value = voices[count];
        count += 1;
    }else{
        document.EmpForm.tex.value = voices[count];
        count += 1;
    }
}

function voice2(){
    if(count2 == voices2.length){
        count2 = 0;
        document.EmpForm2.tex2.value = voices2[count2];
        count2 += 1;
    }else{
        document.EmpForm2.tex2.value = voices2[count2];
        count2 += 1;
    }
}
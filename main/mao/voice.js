const voices = ["ふふ、私はマオ。仲良くしてね。","分からないことがあったら何でも聞いてね～。ココの職員じゃ長く勤めてる方だからさ。","顔色悪いね、大丈夫?怪我しちゃった?"],
voices2 = ["ごめんね、今ちょっと忙しくって。","へぇ、死んじゃったんだ。あの子。","は、はぁ...?なんでこういう時こそ居ないんだよ。あの無能...。"];
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
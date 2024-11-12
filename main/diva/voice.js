const voices = ["わ...よろしくね。私はディーバ。","今日も誰もいなくならないといいな...。","なっ...なんとかなれ～～～!"],
    voices2 = ["アブノーマリティって動物みたいな見た目の子も多くて案外かわいいよね。かわいいとか言ってられないけど...。","ふあ.........。...寝不足かなあ。","えっ!?ワ～～～～～～!?!!助けて!!"];
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

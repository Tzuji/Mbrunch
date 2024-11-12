const voices = ["んー、よろしく。私はミホ。","うわっっ!まーたコイツの作業かよ...!!","アンタもきっとすぐ慣れるよ。そういう風にこの会社は出来てるからサ。"],
voices2 = ["飯は食える時に沢山食っとけ!死んでから後悔しても知らねーから。","あーあー、困った困った。また怒らせちゃったよ。ハハハ...。","あ゛～...。う゛ぅう......ニコチン......。"];
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
const voices = [".........。","...アセラ。好きに呼べばいい。","はぁ........。...管理人の命令だけを聞け。それだけだ。"],
    voices2 = ["...喚くな。喧しくて仕方がない...。","死人が出た?...だから何だ、早く持ち場に戻れ。","......。...それを言うなら、...私は一度も他人に共感されたことは、無い。必要も無い。"];
let count = 0, count2 = 0;

function voice(x){
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

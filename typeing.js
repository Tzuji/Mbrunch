//タイピング
typeText = document.getElementById("TA");
let count = 1 , text;

function typeing(){
    if(typeText.innerHTML == 0){
        text = "Welcome to M-███ branch~ ^^/";
    }else if(typeText.innerHTML == 1){
        text = "🥩 My Employees 🥩"
    }else if(typeText.innerHTML == 2){
        text = "Records :)"
    }else if(typeText.innerHTML == 3){
        text = "いろいろ！"
    }else if(typeText.innerHTML == 4){
        text = ""
    }

    typeText.textContent = text.slice(0,count);

    if (count < text.length){
        count++;
        setTimeout(typeing, 70);
    }
}

setTimeout(typeing, 0);
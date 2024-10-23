//タイピング
typeText = document.getElementById("TA");
let count = 1 , text;

function typeing(){
    if(typeText.innerHTML == 0){
        text = "Welcome to M-███ brunch~ ^^/";
    }else if(typeText.innerHTML == 1){
        text = "🥩 My Employees 🥩"
    }else if(typeText.innerHTML == 2){
        text = "Records :)"
    }

    typeText.textContent = text.slice(0,count);

    if (count < text.length){
        count++;
        setTimeout(typeing, 70);
    }
}

setTimeout(typeing, 0);

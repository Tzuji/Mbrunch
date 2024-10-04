//タイピング
const text = "Welcome to M-███ brunch~ ^^/",
typeText = document.getElementById("TA");
let count = 1;

function typeing(){
    typeText.textContent = text.slice(0,count);

    if (count < text.length){
        count++;
        setTimeout(typeing, 70);
    }
}

setTimeout(typeing, 50);
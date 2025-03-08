const stalker = document.getElementById('cursor'); 
let x, y, ox = 0;

document.addEventListener('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;
    if(x - ox > 0 ){
        stalker.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    }else{
        stalker.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(-1,1)';
    }
    ox = x;
});
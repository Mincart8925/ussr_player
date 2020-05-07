var x = null
function play_ussr(){
    x = document.querySelector('audio');
    x.volume = 0.5;
    x.play();
    x.addEventListener('ended', () => {
        x.play();
    });
}

document.addEventListener('keydown', (e)=>{
    if(e.key == "ArrowUp"){
        x.volume += 0.1;
    } else if(e.key == "ArrowDown"){
        x.volume -= 0.1;
    }
});

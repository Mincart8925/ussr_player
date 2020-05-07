function play_ussr(){
    var x = document.querySelector('audio');
    x.volume = 0.5;
    x.play();
    x.addEventListener('ended', () => {
        x.play();
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('defaultSong');
    var soundIcon = document.getElementById('sond');
    var isMuted = false;

    soundIcon.addEventListener('click', function() {
        if (isMuted) {
            audio.play();
            soundIcon.innerHTML = '<img src="images/son.svg" alt="">';
        } else {
            audio.pause();
            soundIcon.innerHTML = '<img src="images/mute.svg" alt="">';
        }
        isMuted = !isMuted;
    });
});

function startPage(){
    let startButton = document.querySelector(".play")
    startButton.style.display="none"
    let categoury = document.querySelector(".categories")
    categoury.style.display="block"
}
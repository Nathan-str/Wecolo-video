var video = document.querySelector('.player');
var videoPlayer = document.querySelector('#c-video');
var yellow = document.querySelector('.yellow');
var btn = document.getElementById('play-pause');
// var btnMute = document.getElementById('mute-demute');
const volume = videoPlayer.querySelector('.volume');
const mute = videoPlayer.querySelector('.mute');
const fullscreen = videoPlayer.querySelector('.fullscreen');
const buttonMiddle = document.querySelector('.buttonMiddlePlay');
const progress = videoPlayer.querySelector('.yellowBar');

function togglePlayPause(){
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }else{
        btn.className = 'play';
        video.pause();
    }
}


btn.onclick = function(){
    togglePlayPause();
}

//Barre progression
video.addEventListener("timeupdate", function(){
    var yellowPosition = video.currentTime / video.duration;
    yellow.style.width = yellowPosition * 100 + "%";
    if(video.ended){
        btn.className = "play";
    }
});


progress.addEventListener('click', (e)=>{
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = progressTime;
});


//Volume 
volume.addEventListener('mousemove', (e)=>{
    video.volume = e.target.value;
});

//Mute

mute.addEventListener('click', ()=>{
    video.muted = !video.muted;
    mute.classList.toggle('muted');
});

//Plein écran

fullscreen.addEventListener('click', ()=>{
    video.requestFullscreen();
});
 
buttonMiddle.addEventListener('click', ()=>{
    video.play();
    btn.className = 'pause';
    buttonMiddle.style.visibility="hidden";
});

video.addEventListener('click', ()=>{
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }else{
        btn.className = 'play';
        video.pause();
    }
});



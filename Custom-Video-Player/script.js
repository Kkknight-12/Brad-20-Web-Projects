const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// 
const faPlay = document.getElementsByClassName('fa-play');

//play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
        play.className = "control btn play-style";
    }else{
        video.pause();
        play.className = "control btn pause-style";
    }
}

// update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-stop fa-2x"></i>'
    };
}

// update progress & timestamp
function updateProgress(){
    // console.log(video.currentTime)
    progress.value = (video.currentTime / video.duration)*100;
    
    //get minutes
    let mins = Math.floor(video.currentTime / 60 );
    if( mins < 10 ){
        mins = '0' + String(mins);
    }

    //get seconds
    let secs = Math.floor(video.currentTime % 60 );
    if( secs < 10 ){
        secs = '0' + String(secs);
    }

    // set vide time to progress
    timestamp.innerHTML = `${mins}:${secs}`
}

// Set video time to progress
function setVideoProgress(){
    console.log(progress.value)
    console.log(video.duration)
    video.currentTime = (+progress.value * +video.duration) / 100;
    // video.currentTime = +progress.value;
}

// Stop Video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//Event Listners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)
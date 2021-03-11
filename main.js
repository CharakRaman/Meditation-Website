// Work started


const app=()=>{
    const song=document.querySelector('.song');
    const play=document.querySelector('.play');
    const outline=document.querySelector('.trackMovingOutline circle');
    const video=document.querySelector('.video-container video');

    // sounds

    const sounds =document.querySelectorAll('.soundPicker button');
    // timeDisplay
    const timeDisplay=document.querySelector('.time-Display');
    const outlinelength=outline.getTotalLength();
    console.log(outlinelength);

        let fakeDuration=600;
        outline.style.strokeDasharray=outlinelength;
        outline.style.strokeDashoffset=outlinelength;

        //Play song
        play.addEventListener('click',()=>{
           checkPlaying(song);
        });

        //function for play and pause

        const checkPlaying=song=>{
                if(song.paused){
                    song.play();
                    play.src='./svg/pause.svg';
                    video.play();
                }
                else{
                    song.pause();
                    video.pause();
                    play.src='./svg/play.svg';
                }


        };
        song.ontimeupdate=()=>{
            let currentTime=song.currentTime;
            let elapsed=fakeDuration-currentTime;
            let seconds=Math.floor(elapsed % 60);
            let minutes=Math.floor(elapsed / 60);
        }

        //animating the ring

}

app();
// Work started


const app=()=>{
    const song=document.querySelector('.song');
    const play=document.querySelector('.play');
    const outline=document.querySelector('.trackMovingOutline circle');
    const video=document.querySelector('.video-container video');

    // sounds

    const sounds =document.querySelectorAll('.soundPicker button');
    const timeSelect=document.querySelectorAll('.timeSelector button');
    // timeDisplay
    const timeDisplay=document.querySelector('.time-Display');
    const outlinelength=outline.getTotalLength();
    console.log(outlinelength);

        let fakeDuration=600;
        outline.style.strokeDasharray=outlinelength;
        outline.style.strokeDashoffset=outlinelength;



        sounds.forEach(sound=>{
            sound.addEventListener('click',function(){
                song.src=this.getAttribute('data-sound');
                video.src=this.getAttribute('data-video');
                checkPlaying(song);
            });
        });

        //Play song
        play.addEventListener('click',()=>{
           checkPlaying(song);
        });

        //Select sound
        
        timeSelect.forEach(Option =>{
            Option.addEventListener('click' , function(){
            fakeDuration=this.getAttribute('data-time');
            timeDisplay.textContent=`${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`;
                
        });
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

            let progress=outlinelength-(currentTime/fakeDuration)*outlinelength;
            outline.style.strokeDashoffset=progress;

            //Animate Text
            timeDisplay.textContent=`${minutes}:${seconds}`;

            if(currentTime>=fakeDuration){
                song.pause();
                currentTime=0;
                play.src='./svg/play.svg';
                

            }
        }

        //animating the ring

}

app();
console.log("welcome");
//variables
let play=document.getElementById("play");
let audioelement=new Audio("songs/1.mp3");
let songindex=0;
let progress=document.getElementById("progress")
let gif=document.getElementById("onlygif")
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


//events
play.addEventListener("click",function(){
    if (audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        play.classList.remove("fa-regular", "fa-circle-play");
        play.classList.add("fa-regular", "fa-circle-pause");
        gif.style.opacity=1

    }
    else{
        audioelement.pause();
        play.classList.remove("fa-regular", "fa-circle-pause");
        play.classList.add("fa-regular", "fa-circle-play");
        gif.style.opacity=0

    }
})
audioelement.addEventListener("timeupdate",function(){
    p=parseInt((audioelement.currentTime/audioelement.duration)*100)
    progress.value=p
})
progress.addEventListener("change",function(){
    audioelement.currentTime=progress.value*0.01*audioelement.duration
})
document.getElementById("next").addEventListener("click",function(){
    if (songindex===9){
        songindex=0
    }
    else{
        songindex+=1
    }
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.play();
    audioElement.currentTime = 0;
    play.classList.remove("fa-regular", "fa-circle-play");
    play.classList.add("fa-regular", "fa-circle-pause");
    gif.style.opacity=1

})
document.getElementById("prev").addEventListener("click",function(){
    if (songindex===0){
        songindex=9
    }
    else{
        songindex-=1
    }
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.play();
    audioElement.currentTime = 0;
    play.classList.remove("fa-regular", "fa-circle-play");
    play.classList.add("fa-regular", "fa-circle-pause");
    gif.style.opacity=1

})
console.log(document.getElementsByClassName("p"));
document.getElementById("song1").addEventListener("click",function(){
    if (audioelement.paused||audioelement.currentTime<=0){audioelement.src="songs/1.mp3"
        audioelement.play();
        document.getElementById("song1").classList.remove("fa-regular", "fa-circle-play")
        document.getElementById("song1").classList.add("fa-regular", "fa-circle-pause")
        play.classList.remove("fa-regular", "fa-circle-play");
        play.classList.add("fa-regular", "fa-circle-pause");}
    else{
        audioelement.pause();
        document.getElementById("song1").classList.remove("fa-regular", "fa-circle-pause")
        document.getElementById("song1").classList.add("fa-regular", "fa-circle-play")
        play.classList.remove("fa-regular", "fa-circle-pause");
        play.classList.add("fa-regular", "fa-circle-play");

    }
    
})
document.getElementById("song2").addEventListener("click",function(){
    if (audioelement.paused||audioelement.currentTime<=0){audioelement.src="songs/2.mp3"
        audioelement.play();
        document.getElementById("song2").classList.remove("fa-regular", "fa-circle-play")
        document.getElementById("song2").classList.add("fa-regular", "fa-circle-pause")
        play.classList.remove("fa-regular", "fa-circle-play");
        play.classList.add("fa-regular", "fa-circle-pause");}
    else{
        audioelement.pause();
        document.getElementById("song2").classList.remove("fa-regular", "fa-circle-pause")
        document.getElementById("song2").classList.add("fa-regular", "fa-circle-play")
        play.classList.remove("fa-regular", "fa-circle-pause");
        play.classList.add("fa-regular", "fa-circle-play");

    }
    
})
document.getElementById("song3").addEventListener("click",function(){
    if (audioelement.paused||audioelement.currentTime<=0){audioelement.src="songs/3.mp3"
        audioelement.play();
        document.getElementById("song3").classList.remove("fa-regular", "fa-circle-play")
        document.getElementById("song3").classList.add("fa-regular", "fa-circle-pause")
        play.classList.remove("fa-regular", "fa-circle-play");
        play.classList.add("fa-regular", "fa-circle-pause");}
    else{
        audioelement.pause();
        document.getElementById("song3").classList.remove("fa-regular", "fa-circle-pause")
        document.getElementById("song3").classList.add("fa-regular", "fa-circle-play")
        play.classList.remove("fa-regular", "fa-circle-pause");
        play.classList.add("fa-regular", "fa-circle-play");

    }
    
})
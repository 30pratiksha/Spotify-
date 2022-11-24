console.log("WELCOME TO SPOTIFY");

//Inetialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Bataamiz-Dil", filePath:"songs/1.mp3", coverPath:"images/covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"songs/2.mp3", coverPath:"images/covers/2.jpg"},
    {songName: "Aahatein", filePath:"songs/3.mp3", coverPath:"images/covers/3.jpg"},
    {songName: "Aise-Kyu(New Relesed)", filePath:"songs/4.mp3", coverPath:"images/covers/4.jpg"},
    {songName: "Kesariya (Brahmastra)", filePath:"songs/5.mp3", coverPath:"images/covers/5.jpg"},
    {songName: "Pasoori(selli gill)", filePath:"songs/6.mp3", coverPath:"images/covers/6.jpg"},
    {songName: "Mein Tumhara(Dil Bechara)", filePath:"/song7.mp3", coverPath:"images/covers/7.jpg"},
    {songName: "Dj Param Sundari", filePath:"songs/8.mp3", coverPath:"images/covers/8.jpg"},
    {songName: "Kho Gaye Hum Kha", filePath:"songs/9.mp3", coverPath:"images/covers/9.jpg"},
    {songName: "Bandhiya[Junglee]", filePath:"songs/10.mp3", coverPath:"images/covers/10.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

})

//audioElement.play();

//Handel Pause play button
masterPlay.addEventListener('click', () =>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
     }
})

//Listen  to the Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click' , (e) => {
    makeAllPlays();
    songIndex  = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



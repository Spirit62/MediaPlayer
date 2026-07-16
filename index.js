const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song Titles

const songs=['music1','music2','music3']

//Keep Track of Song

let songIndex=1

//Intially Load Song Into DOM

loadSong(songs[songIndex])

//Update the song details

function loadSong(song){
  title.innerText = song
  audio.src= `soundtracks/${song}.mp3`
  cover.src=`images/${song}.jpg`
}

//Event Listeners


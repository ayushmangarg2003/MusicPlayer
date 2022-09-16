var play = document.querySelector('#playicon');
var song = document.querySelector('#song')
var btn2 = document.querySelector('#btn')
var btn = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')

play.addEventListener('click', function(){
    if (song.paused){
        song.play();
        play.src = "./Images/pause.png"
    }
    else{
        song.pause();
        play.src = "./Images/play.png"
    }
});

btn2.addEventListener('click', function(){
    song.src = "./Music/DevaDeva.m4a"
    song.play()
});
btn.addEventListener('click', function(){
    song.src = "./Music/kesariya.m4a"
    song.play()
});
btn3.addEventListener('click', function(){
    song.src = "./Music/Samjhawan.m4a"
    song.play()
});
btn4.addEventListener('click', function(){
    song.src = "./Music/KhoGyeHumKahan.m4a"
    song.play()
});


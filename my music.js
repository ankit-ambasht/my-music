
const music =document.querySelector("audio");
const img= document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementsByClassName("title");
const artist= document.getElementsByClassName("artist");
const prev= document.getElementById("prev");
const next = document.getElementById("next");

const songs =[
    {
        name:"image1",
        title:"daru kharab",
        artist:"party",
        
    },
    {
        name:"image2",
        title:"faryad ",
       artist :"sad",
        
    },

    {
        name:"image3",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image4",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image5",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image6",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image7",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image8",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image9",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image10",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image12",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image13",
        title:"bhatar",
       artist :"party",
        
    },
    
    {
        name:"image14",
        title:"bhatar",
       artist :"party",
        
    },

    {
        name:"image15",
        title:"bhatar",
       artist :"party",
        
    },
    
];




 let isplaying = false;
 //for play music
const playmusic = ()=>{
   isplaying = true;
    music.play();
     play.classList.replace("fa-play","fa-pause");
     img.classList.add("anime");
}; 
//for pause music
const pausemusic = () =>{
   isplaying = false;
    music.pause();
     play.classList.replace("fa-pause","fa-play");
     img.classList.remove("anime");
} ; 
play.addEventListener("click", () =>{
    if(isplaying){
        pausemusic();
    }else{
        playmusic();
    }
});
//changimg music image 
const loadsong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="mus/" + songs.name +".mp3";
    img.src="img/" + songs.name + ".jpg";


};
songIndex = 0;
// loadsong(songs[2]);
const nextsong = () =>{
    songIndex = (songIndex +1)% songs.length;
    loadsong(songs[songIndex]);
    playmusic();
} ;
const prevsong = () =>{
    songIndex = (songIndex -1+songs.length)%songs.length;
    loadsong(songs[songIndex]);
    playmusic();
} ;
 next.addEventListener("click",nextsong);
 prev.addEventListener("click",prevsong);
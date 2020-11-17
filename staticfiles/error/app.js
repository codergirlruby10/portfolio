var character = document.querySelector('#character');
var bullet = document.querySelector('#bullet');
// var html = document.querySelector('html');

function jump(){
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
    setTimeout(()=>{
      character.classList.remove("animate");
    },1000);
}
var gameOver = setInterval(()=>{
  var dinoTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));

  if(bulletLeft<70 && bulletLeft>0 && dinoTop>=110){
    bullet.style.animation = "none";
    bullet.style.display = "none";
    document.querySelector('.over').style.display = "block";
  }
},10);


// detecting button press

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", sound);

  // handClick = is named function
  // if listemer is function() {  alert("i'm clicked");   } = is anonymos function
function sound() {
var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

}

}

// detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key); // key properties says which keyboard key has to be pressed
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

    case "w":
    var crash= new Audio('sounds/crash.mp3').play();
    break;

    case "a":
    var kickBass= new Audio('sounds/kick-bass.mp3').play();
    break;

    case "s":
    var snare= new Audio('sounds/snare.mp3').play();
    break;

    case "d":
    var tom1= new Audio('sounds/tom-1.mp3').play();
    break;

    case "j":
    var tom2= new Audio('sounds/tom-2.mp3').play();
    break;

    case "k":
    var tom3= new Audio('sounds/tom-3.mp3').play();
    break;

    case "l":
    var tom4= new Audio('sounds/tom-4.mp3').play();
    break;

    default:console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout( function(){ activeButton.classList.remove("pressed"); }, 100 ); // works for animating


}

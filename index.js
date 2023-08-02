//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  
  buttonAnimation(event.key);

})


function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio('sounds/drum-roll-12-153701.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds\drum-roll-13-153700.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/drum-roll-14-153702');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/failure-drum-sound-effect-2-7184');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/hit-drum-superclasher-cinematic-trailer-sound-effects-124759');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/punch-boxing-02wav-14897');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/sting-rimshot-drum-roll-smooth-100369');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

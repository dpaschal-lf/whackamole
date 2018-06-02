$(document).ready(initializeApp);

var player;
var score = 0;

function initializeApp(){
clickHandlers();
initiateMole(300,700); 
}


function clickHandlers(){
//onclick for when the user clicks the mole and wins 
    $('.container>.mole').on('click', function() {
        score++
        winStatus
    });
    $('.resetBtn').on('click', resetGame);
}


function randomizeMole(){
//pauls animation will be running and timed randomly 
}

function popUpAnimation () {
    console.log('popUpAnimation()')
    $('.mole').toggleClass('slide_animation');
}

function winStatus(){
    if (score === 1){
        alert('you won!')
    }
// when the user clicks the mole, some kind of alert 
}

function resetGame(){
// once the game is over, reset all variables to 0 and start the game over again
}

// function getRandomNumber(min, max) {
//    return (Math.floor(Math.random() * (max-min + 1))); 
// }

function getRandomNumber(min, max) {
    return (Math.floor( Math.random() * ( max - min )  ) + min + 1 ); 
 }

function popUpAnimation(){
    console.log("pop UP animation is firing"); 
}




function initiateMole( minTime, maxTime){
    /// index number for each mole 
    var nextTime = getRandomNumber(minTime, maxTime);
    var timer = null;

    function generateMoleNumber(){
        var newClass= Math.floor((Math.random() * 14)+1); 
        var newElement= ".mole"+newClass; 
        var element = $(newElement); 
        return element; 
    }
    
    function toggleState(){  
      var element=generateMoleNumber(); 
      element.toggleClass('slide_animation');
      nextTime = getRandomNumber(minTime, maxTime);
      timer = setTimeout( toggleState, nextTime );//each successive timeout
    }
    
    timer = setTimeout( toggleState, nextTime );//start the first timeout
  }
  

// initiateMole(500,2000); 
// initiateMole(2000,3000); 
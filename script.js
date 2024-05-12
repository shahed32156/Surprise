document.getElementById('changeColorButton').addEventListener('click', function() {
    // Change background color
    document.body.classList.toggle('color-change');
    
    // Show the icon
    document.getElementById('bulb').classList.toggle('hidden');
    // Show the msg
    document.getElementById('msg').classList.toggle('hidden');
    // Show the img
    document.getElementById('img').classList.toggle('hidden');
    // Show the baloon
    document.getElementById('baloon').classList.toggle('hidden');
    // Show the baloon
    document.getElementById('animation').classList.toggle('hidden');

  });

//   const audio = new Audio();
//   audio.src="Tomake_Chai.mp3";

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.getElementsByClassName('play-button');
    const audioElements = document.getElementsByClassName('loop-audio');
    
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener('click', function() {
            const audio = audioElements[i];
            if (audio.paused) {
                audio.play();
               
            } else {
                audio.pause();
                
            }
        });
    }
});


  








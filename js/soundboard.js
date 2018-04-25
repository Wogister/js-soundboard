window.onload = function () {
  // Toggle between play and edit mode  
  document.getElementById("toggleMode").addEventListener('click', changeMode());	  
  // Have to rewrite without loop
  const selectPlaybuttons = document.getElementsByClassName('playbutton');
  for(let i = 0; i < selectPlaybuttons.length; i++) {
    selectPlaybuttons[i].addEventListener('click', function(e) {  

  //document.getElementById("all").addEventListener('click', function(e) {
      const target = e.target;
      const clickedItem = target.parentElement.id
      const audio = document.querySelector(`audio[data-key="${clickedItem}"]`);
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }

      else {
        audio.play();
      }
    });
  };
}

function changeMode() {
  const element = document.getElementById('wrapper');
  element.classList.toggle('playmode');
}

function readURI() {
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  if (file) {
    const URI = reader.readAsDataURL(file);
    return URI;
  }
}

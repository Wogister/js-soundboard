window.onload = function () {
  document.getElementById("toggleMode").addEventListener('click', function() {
    //const selectPlaybuttons = document.getElementsByClassName('playbutton');
    const selectEditbuttons = document.getElementsByClassName('editbutton');
    for(let i = 0; i < selectEditbuttons.length; i++) {
      if (selectEditbuttons[i].style.display == "none") {
        selectEditbuttons[i].style.display = "block";
      }
      else {
        selectEditbuttons[i].style.display = "none";
      }
    }
  });	  

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

function playThis(e) {
  const clickedItem = e.target.getAttribute('name');
  const audioNumber = clickedItem.slice(1,4);
  const audio = document.querySelector(`audio[id='${audioNumber}']`);
  const type = clickedItem.slice(0,1);
  if (type == 'P' && audio.paused) {
	  audio.play();
  }
  else if (type == 'S' && !audio.paused) {
	  audio.pause();
	  audio.currentTime = 0;
  }
}

window.onload = function() {
  document.getElementById("window").addEventListener('click', playThis, false);
}

window.onerror = function(error) {
  console.log(error);
}

function sliderChange() {
	console.log(this.value);
}
	


function pauseThis(element) {
	var id = element.parentNode.parentNode.getAttribute('name');
	document.getElementById(id).pause();	
}

function loopThis(element) {
	var id = element.parentNode.parentNode.getAttribute('name');
	if (document.getElementById(id).loop == true) {
		document.getElementById(id).loop = false;
		element.parentNode.parentNode.classList.remove('looped');
	}
	else {
		document.getElementById(id).loop = true;	
		element.parentNode.parentNode.classList.add('looped');
	}
	
}

/*
function stopThis(element) {
	var id = element.parentNode.parentNode.getAttribute('name');
		document.getElementById(id).pause();
		document.getElementById(id).currentTime=0;
		document.getElementById(id).parentNode.classList.add('fa-play');
		document.getElementById(id).parentNode.classList.remove('fa-pause');
} 
function stopOne(element) {
	var id = element.parentNode.parentNode.parentNode.getAttribute('name');
		document.getElementById(id).currentTime=0;
		element.classList.add('fa-play');
		element.classList.remove('fa-pause');
}*/

function setvolume(element){
	var id = element.parentNode.parentNode.parentNode.getAttribute('name');
	document.getElementById(id).volume = element.value / 100;
}

function changeMode() {
	var element = document.getElementById('wrapper');
	element.classList.toggle('playmode');
}

function playAll() {
	var i = 1;
	for (i=1; i < 3; i++) {
		var id = document.getElementById(i);
		if (document.getElementById(i).classList.contains('masterpaused')) {
			document.getElementById(i).play();
			document.getElementById(i).parentNode.classList.remove('fa-play');
			document.getElementById(i).parentNode.classList.add('fa-pause');
			document.getElementById(i).classList.remove('masterpaused');
		}
	}
}

function pauseAll() {
	var i = 1;
	for (i=1; i < 3; i++) {
		var id = document.getElementById(i);
		if (document.getElementById(i).paused == false) {
			document.getElementById(i).pause();
			document.getElementById(i).parentNode.classList.add('fa-play');
			document.getElementById(i).parentNode.classList.remove('fa-pause');
			document.getElementById(i).classList.add('masterpaused'); 
		}
	}
}

function stopAll() {
	var i = 1;
	for (i=1; i < 3; i++) {
		var id = document.getElementById(i);
		if (document.getElementById(i).paused == false) {
			document.getElementById(i).pause();
			document.getElementById(i).currentTime=0;
			document.getElementById(i).parentNode.classList.add('fa-play');
			document.getElementById(i).parentNode.classList.remove('fa-pause');
            document.getElementById(i).classList.add('masterpaused');
		}
	}
}

function resetAll() {
	var i = 1;
	for (i=1; i < 3; i++) {
		var id = document.getElementById(i);
		if (document.getElementById(i).classList.contains('masterpaused')) {
			document.getElementById(i).classList.remove('masterpaused');
		}
	}
}

function readURL(input) {
    var url = input.name;
    var id = input.parentNode.parentNode.parentNode.getAttribute('name');
    document.getElementById(id).setAttribute('src', url);
}



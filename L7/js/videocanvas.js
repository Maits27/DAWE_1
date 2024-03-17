var efecto = null;
var clip = "video/demovideo1"; // nombre del vídeo, sin extensión
var pathAudio = "audio/soundtrack.mp3";
var rotar = false;
window.onload = function() {

	var video = document.getElementById("video");
	var botonByN = document.getElementById("byn");
	botonByN.onclick = cambiarEfecto;
	var botonNormal = document.getElementById("normal");
	botonNormal.onclick = cambiarEfecto;
	var botonPausa = document.getElementById("pausa");
	botonPausa.onclick = pausarVideo;
	var botonCF = document.getElementById("cienciaFiccion");
	botonCF.onclick = cambiarEfecto;
	var botonRotar = document.getElementById("rotar");
	botonRotar.onclick = rotarVideo;
	var botonAudio = document.getElementById("playAudio");
	botonAudio.onclick = playAudio;

	var botonPip = document.getElementById("pip");
	botonPip.onclick = pip;
				
	video.addEventListener("play", procesarFrame, false);
	
	video.src = clip + getFormatExtension();
	video.load();
	video.play();
	
}

function cambiarEfecto(e){
	var id = e.target.getAttribute("id");

	if ( id == "byn" ){
		efecto = byn;
	} else if (id == "cienciaFiccion"){
		efecto = scifi;
	}else {
		efecto = null;
	}
}

function getFormatExtension() {
	var video = document.getElementById("video");
	if (video.canPlayType("video/mp4") != "") {
		return ".mp4";
	} 
	else if (video.canPlayType("video/ogg") != "") {
		return ".ogv";
	}
	else if (video.canPlayType("video/webm") != "") {
		return ".webm";
	} 
}


function procesarFrame(e) {
	var video = document.getElementById("video");

	if (video.paused || video.ended) {
		return;
	}

	var bufferCanvas = document.getElementById("buffer");
	var displayCanvas = document.getElementById("display");
	var buffer = bufferCanvas.getContext("2d");
	var display = displayCanvas.getContext("2d");

	buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);
	var frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
	var length = frame.data.length / 4;

	for (var i = 0; i < length; i++) {
		var r = frame.data[i * 4 + 0];
		var g = frame.data[i * 4 + 1];
		var b = frame.data[i * 4 + 2];
		if (efecto){		
			efecto(i, r, g, b, frame.data);
		}
	}
	if (rotar){
		buffer.translate(bufferCanvas.width / 2, bufferCanvas.height / 2);
		buffer.rotate((Math.PI / 180) * 2);
		buffer.translate(-bufferCanvas.width/2, -bufferCanvas.height/2);
	}
	display.putImageData(frame, 0, 0);

	setTimeout(procesarFrame, 0);
	// en los navegadores modernos, es mejor usar :
	// requestAnimationFrame(procesarFrame);

}

function pausarVideo() {
	var video = document.getElementById("video");
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function rotarVideo() {
    rotar = true;
}




function scifi(pos, r, g, b, data) {
	var offset = pos * 4;
	data[offset] = Math.round(255 - r);
	data[offset + 1] = Math.round(255 - g);
	data[offset + 2] = Math.round(255 - b);
}

function byn(pos, r, g, b, data) {
	var gris = (r+g+b)/3;

	data[pos * 4 + 0] = gris;
	data[pos * 4 + 1] = gris;
	data[pos * 4 + 2] = gris;
}

function playAudio(){
	loadAudio(pathAudio).then(audio => audio.play());
}

function loadAudio(path){
	return new Promise((resolve, reject) => {
		const audio = new Audio(path);
		audio.oncanplay = () => resolve(audio);
		audio.onerror = reject;
	});
}

async function pip(){
	var video = document.getElementById("video");
	await video.requestPictureInPicture();
}
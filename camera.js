var camVideo = document.createElement("video");
var streaming = false, width = screen.width, height = screen.height;
navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

navigator.getMedia({video: true,audio: false}, function(stream) {
	if (navigator.mozGetUserMedia) {
		camVideo.mozSrcObject = stream;
	} else {
		var vendorURL = window.URL || window.webkitURL;
		camVideo.src = vendorURL.createObjectURL(stream);
	}
	camVideo.play();
	}, function(err) {
		console.log("An error occured! " + err);
	});

camVideo.addEventListener('canplay', function(ev){
	if (!streaming) {
//		camVideo.width = width;
//		camVideo.height = height;
//		camVideo.setAttribute('width', width);
//		camVideo.setAttribute('height', height);
		streaming = true;
	}
}, false);

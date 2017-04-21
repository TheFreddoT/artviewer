var mainCanvas = document.getElementById("mainCanvas");
var mainContext = mainCanvas.getContext("2d");
var out = document.getElementById("output");
var mean = 0;
function update(){
	if(streaming){
		mainContext.drawImage(camVideo, 0, 0, 500, 500);

	}
//	window.requestAnimationFrame(update);
	window.setTimeout(update, 50);
}

update();

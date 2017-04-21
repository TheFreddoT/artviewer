var mainCanvas = document.getElementById("mainCanvas");
var mainContext = mainCanvas.getContext("2d");
var out = document.getElementById("output");
var mean = 0;
function update(){
	if(streaming){
		mainContext.drawImage(camVideo, 0, 0, 500, 500);
		var iD = mainContext.getImageData(0, 0, 500, 500).data;
		mainContext.fillStyle = "black";
		mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);	
		for(var y=0;y<500;y+=1){
			for(var x=0;x<500;x+=1){
				var pos = (y * 500 + x) * 4;
				var luminosity = (0.2126 * iD[pos] + 0.7152 * iD[pos + 1] + 0.0722 * iD[pos + 2]) / 255;
				var l = Math.round(luminosity * 1000) / 1000;
				mainContext.fillStyle = "rgb(" + l + "," + l + "," + l + ")";
				mainContext.fillRect(x, y, x+1,y+1);
			}
		}
	}
//	window.requestAnimationFrame(update);
	window.setTimeout(update, 50);
}

update();

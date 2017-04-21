var mainCanvas = document.getElementById("mainCanvas");
var mainContext = mainCanvas.getContext("2d");
var out = document.getElementById("output");
var mean = 0;
function update(){
	if(streaming){
		mainContext.drawImage(camVideo, 0, 0, 500, 500);
		mainContext.fillStyle = "white";
		var iD = mainContext.getImageData(0, 0, 500, 500).data;
		mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);	
		var oData = "";
		var total = 0;
		for(var y=0;y<500;y+=5){
			for(var x=0;x<500;x+=5){
				var pos = (y * 500 + x) * 4;
				var luminosity = (0.2126 * iD[pos] + 0.7152 * iD[pos + 1] + 0.0722 * iD[pos + 2]) / 255;
				var l = Math.round(luminosity * 1000) / 1000;
				console.log(l);
				mainContext.fillStyle = "rgba(0, 0, 0, " + l + ")";
				mainContext.fillRect(x, y, x+4,y+4);
			}
			oData += "\n";
		}
		out.innerHTML = oData;
		mean = total / 10000;
	}
//	window.requestAnimationFrame(update);
	window.setTimeout(update, 50);
}

update();

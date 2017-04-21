var mainCanvas = document.getElementById("mainCanvas");
var mainContext = mainCanvas.getContext("2d");
var out = document.getElementById("output");
var mean = 0;
function update(){
	if(streaming){
		mainContext.drawImage(camVideo, 0, 0, 500, 500);
		var iD = mainContext.getImageData(0, 0, 500, 500).data;
		var oData = "";
		var total = 0;
		for(var y=0;y<500;y+=5){
			for(var x=499;x>=0;x-=5){
				var pos = (y * 500 + x) * 4;
				var luminosity = (0.2126 * iD[pos] + 0.7152 * iD[pos + 1] + 0.0722 * iD[pos + 2]) / 255;
				total += luminosity;
				var l = luminosity;
				if(l < mean){
					mainContext.fillStyle = "#000000";
					mainContext.fillRect(x, y, 1, 1);
					oData += "@&#8239;";
				} else if(l < mean * 1.5){
					mainContext.fillStyle = "#888888";
					mainContext.fillRect(x, y, 1, 1);
					oData += "O&#8239;";
				} else {
					mainContext.fillStyle = "#FFFFFF";
					mainContext.fillRect(x, y, 1, 1);
					oData += "-&#8239;";
				}
				last = luminosity;
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

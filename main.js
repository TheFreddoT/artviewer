var mainCanvas = document.getElementById("mainCanvas");
var mainContext = mainCanvas.getContext("2d");
var out = document.getElementById("output");
var mean = 0;
function update(){
	if(streaming){
		mainContext.drawImage(camVideo, 0, 0);
		var imgData = mainContext.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
        	var pixels  = imgData.data;
        	for (var i = 0, n = pixels.length; i < n; i += 4) {
        		var grayscale = pixels[i] * 0.3 + pixels[i+1] * 0.59 + pixels[i+2] * 0.11;
        		pixels[i  ] = grayscale;        // red
        		pixels[i+1] = grayscale;        // green
        		pixels[i+2] = grayscale;        // blue
        		//pixels[i+3]              is alpha
    		}
    //redraw the image in black & white
    		mainContext.putImageData(imgData, 0, 0);
	}
//	window.requestAnimationFrame(update);
	window.requestAnimationFrame(update);
}

update();

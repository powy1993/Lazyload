function lazyload(options) {
	var doc = options.id ? document.getElementById(options.id) : document;
	if (doc === null) return;
	var tmp = doc.getElementsByTagName('img'),
	tmplen = tmp.length,
	imgobj = [];

	for (var i = 0; i<tmplen; i++) {
		var _tmpobj = tmp[i];
		if (_tmpobj.getAttribute('data-src') !== null) {
			if (isLoad(_tmpobj)) {
				setimg(_tmpobj);
			} else {
				imgobj.push(_tmpobj);
			}
		}
	}
	var len = imgobj.length;
	function handler() {
		for (var i = 0,
		end = len; i < end; i++) {
			var obj = imgobj[i];
			if (isLoad(obj)) {
				_setimg(obj);
				imgobj.splice(i, 1);
				len--;
				if(len===0){loadstop()}
			}
		}
	}

	function isLoad(ele) {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(typeof ele==='undefined') return false;
		var edit = ~~ele.getAttribute("data-range") || options.lazyRange;
		var clientHeight = scrollTop + document.documentElement.clientHeight + edit;
		var offsetTop = 0;

		while(ele.tagName !== 'BODY'){
        		offsetTop += ele.offsetTop;
        		ele = ele.offsetParent;
        	}
		return (clientHeight > offsetTop);
	}
	function _setimg(ele) {
		if (options.lazyTime) {
			setTimeout(function() {
				setimg(ele);
			},
			options.lazyTime + ~~ele.getAttribute('data-time'))
		} else {
			setimg(ele);
		}
	}
	function setimg(ele) {

		ele.src = ele.getAttribute('data-src');

	}
	function loadstop(){
	window.removeEventListener ? window.removeEventListener("scroll", handler, false) : window.detachEvent("onscroll", handler);
	}
    loadstop();
	window.addEventListener ? window.addEventListener("scroll", handler, false) : window.attachEvent("onscroll", handler);
}

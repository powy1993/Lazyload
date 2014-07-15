function lazyload(options) {
	var doc = options.id ? document.getElementById(options.id) : document;
	if (doc === null) return;
	var tmp = doc.getElementsByTagName('img'),
	tmplen = tmp.length,
	imgobj = [];

	while (tmplen--) {
		var _tmpobj = tmp[tmplen];
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
			}
		}
	}

	function isLoad(ele) {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		var edit = ~~ele.getAttribute("data-range") || options.lazyRange;
		var clientHeight = scrollTop + document.documentElement.clientHeight + edit;
		return (clientHeight > ele.offsetTop);
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
	window.removeEventListener ? window.removeEventListener("scroll", handler, false) : window.detachEvent("onscroll", handler);
	window.addEventListener ? window.addEventListener("scroll", handler, false) : window.attachEvent("onscroll", handler);
}
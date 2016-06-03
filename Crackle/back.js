// JavaScript Document
var num = 1;
var icon = num.toString();
var next;

function enterPressed() {
		next = document.getElementById(icon).href;
		window.location = next;
}

document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 13) {
			enterPressed();
		}
}

window.addEventListener("keyup", function(e){ if(e.keyCode == 27) history.back(); }, false);
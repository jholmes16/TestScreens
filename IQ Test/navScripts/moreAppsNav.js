// JavaScript Document
var num = 1;
var icon = num.toString();
var next;

function leftArrowPressed() {
		document.getElementById(icon).style.border ='initial';
		num = num - 1;
		if (num < 1) {
			num = 1;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
		//alert(next);
			document.getElementById(icon).style.border = "thick solid #666";
	}
	
	function upArrowPressed() {
		document.getElementById(icon).style.border ='initial';
	  	num = num - 4;
		if (num < 1) {
			num = 1;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
	  	//alert(next);
			document.getElementById(icon).style.border = "thick solid #666";
	}
	
	function rightArrowPressed() {
		document.getElementById(icon).style.border ='initial';
		num = num + 1;
		if (num > 10) {
			num = 10;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
		//alert(next);
			document.getElementById(icon).style.border = "thick solid #666";
	}
	
	function downArrowPressed() {
		document.getElementById(icon).style.border ='initial';
		num = num + 4;
		if (num > 10) {
			num = 10;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
	  	//alert(next);
			document.getElementById(icon).style.border = "thick solid #666";
	}
	
	function enterPressed() {
		next = document.getElementById(icon).href;
		window.location = next;
	}
	
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		switch (evt.keyCode) {
			case 37:
				leftArrowPressed();
				break;
			case 38:
				upArrowPressed();
				break;	
			case 39:
				rightArrowPressed();
				break;
			case 40:
				downArrowPressed();
				break;
			case 13:
				enterPressed();
				break;
		}
		
	};
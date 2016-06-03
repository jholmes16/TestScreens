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
			document.getElementById(icon).style.border = "thick solid #F96";
	}
	
	function upArrowPressed() {
		document.getElementById(icon).style.border ='initial';
	  	num = num - 6;
		if (num < 1) {
			num = 1;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
	  	//alert(next);
			document.getElementById(icon).style.border = "thick solid #F96";
	}
	
	function rightArrowPressed() {
		document.getElementById(icon).style.border ='initial';
		num = num + 1;
		if (num > 16) {
			num = 16;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
		//alert(next);
			document.getElementById(icon).style.border = "thick solid #F96";
	}
	
	function downArrowPressed() {
		document.getElementById(icon).style.border ='initial';
		num = num + 6;
		if (num > 16) {
			num = 16;
		}
		icon = num.toString();
		next = document.getElementById(icon).href;
	  	//alert(next);
			document.getElementById(icon).style.border = "thick solid #F96";
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
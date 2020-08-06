document.getElementById("num1").addEventListener("click",num1);
document.getElementById("num2").addEventListener("click",num2);
document.getElementById("num3").addEventListener("click",num3);
document.getElementById("num4").addEventListener("click",num4);
document.getElementById("num5").addEventListener("click",num5);
document.getElementById("num6").addEventListener("click",num6);
document.getElementById("num7").addEventListener("click",num7);
document.getElementById("num8").addEventListener("click",num8);
document.getElementById("num9").addEventListener("click",num9);
document.getElementById("num0").addEventListener("click",num0);
document.getElementById("suma").addEventListener("click",o1);
document.getElementById("resta").addEventListener("click",o2);
document.getElementById("division").addEventListener("click",o3);
document.getElementById("multiplicacion").addEventListener("click",o4);
document.getElementById("igual").addEventListener("click",showResult);

function num1() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num1").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num2() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num2").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num3() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num3").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num4() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num4").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num5() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num5").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num6() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num6").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num7() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num7").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num8() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num8").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num9() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num9").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}
function num0() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("num0").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("suma").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}

function o2() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("resta").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}

function o3() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('res').innerHTML = actual + sumado
}

function o4() {
	let actual = document.getElementById('res').innerHTML;
	let sumado = document.getElementById("multiplicacion").innerHTML;
	document.getElementById('res').innerHTML = actual +  sumado
}
function showResult() {
	let actual = document.getElementById('res').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("/");
	let mult = actual.indexOf("x");
	supri=actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("res").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("res").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("/",2);
		res = arr[0] / arr[1];
		document.getElementById("res").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("res").innerHTML = res;
		
	}
}
function borrar() {
	document.getElementById('res').innerHTML = "";
}
function suprimir(){
	document.getElementById('res').innerHTML = "1610077589";
}






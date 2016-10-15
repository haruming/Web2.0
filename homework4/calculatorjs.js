var equal = false;

function onbutton(num) {
	var name = document.getElementById("show");
	if (equal) {
		name.value = "0";
		equal = false;
	}
	name.value = (name.value == "0") ? "" : name.value;
	name.value += num;
}

function onbutton_point() {
	var name = document.getElementById("show");
	name.value += ".";
}

function onbutton_operator(sign) {
	var name = document.getElementById("show");
	equal = false;
	name.value += sign.value;
}

function onbutton_backspace() {
	var name = document.getElementById("show");
	if (name.value.length == 1) {
		name.value = "0";
	} else {
		name.value = name.value.substring(0, name.value.length-1);
	}
}

function onbutton_clear() {
	var name = document.getElementById("show");
	name.value = "0";
	equal = false;
}

function onbutton_equal() {
	var name = document.getElementById("show");
	try {
		name.value = parseFloat(eval(name.value).toPrecision(10));
		equal = true;
	}
	catch(exception) {
		alert(exception);
		equal = false;
	}
}

function onbutton_left_bracket() {
	var name = document.getElementById("show");
	name.value = (name.value == "0") ? "" : name.value;
	name.value += "(";
}

function onbutton_right_bracket() {
	var name = document.getElementById("show");
	name.value = (name.value == "0") ? "" : name.value;
	name.value += ")";
}
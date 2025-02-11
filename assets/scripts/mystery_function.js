input_x = document.getElementById('input_x');
table = document.getElementById('outputs');
error = document.getElementById('error');
use_last = document.getElementById("last_output");
submit = document.getElementById("submit");
clear = document.getElementById("clear");

clear.onclick = function () {
	table.innerHTML = "<tr class='header'><td>x</td><td>f(x)</td></tr>"
	last_out = null;
	row_count = 0;
	use_last.classList.add("disabled");
}

function capture_event (e) {
	if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
    	compute_function()
      // Enter pressed
      return false;
    }
}

input_x.onkeypress = capture_event;

use_last.onclick = function () {
	if (!use_last.classList.contains("disabled")) {
		input_x.value = last_output;
		compute_function();
	}
}

submit.onclick = compute_function;

function log_output (A, B) {
	row_count = row_count + 1;
	if (row_count % 2 == 0) {
		table.innerHTML += "<tr class='even'><td>" + A + "</td><td>" + B + "</td></tr>"
	}
	else
	{
		table.innerHTML += "<tr><td>" + A + "</td><td>" + B + "</td></tr>"
	}
	
}

function log_error (err) {
	error.innerHTML = err;
}

function clear_error () {
	error.innerHTML = "";
}

function f (x) {
	if (x % 2 == 0) {
		return x / 2;
	}
	else
	{
		return 3*x+1;
	}
}

const re = /^\s*[0-9]+\s*$/;
var last_output = null;
var row_count = 0;

function compute_function () {
	x = input_x.value;

	if (!re.test(x)) {
		log_error("Input must be a natural number (e.g. 1, 2, 3, ...)");
		return false;
	}

	x = +x;

	if (x == 0) {
		log_error("Input must be a natural number (e.g. 1, 2, 3, ...)");
		return false;
	}

	log_output(x, f(x));
	clear_error();

	input_x.value = "";
	input_x.focus();

	last_output = f(x);
	use_last.classList.remove("disabled")
}


document.getElementById('compute').onclick = compute_operation
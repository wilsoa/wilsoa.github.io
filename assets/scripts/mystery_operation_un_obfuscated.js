set_A = document.getElementById('set_A');
set_B = document.getElementById('set_B');
table = document.getElementById('outputs')

function set (L) {
	out = [];

	L.forEach(function(i) {
		if (i == i && !out.includes(i)) {
			out.push(i);
		}
	});

	out.sort();

	return out;
}

function capture_event (e) {
	if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
    	compute_operation()
      // Enter pressed
      return false;
    }
}

set_A.onkeypress = capture_event;
set_B.onkeypress = capture_event;

function sanitize (part) {
	return +part;
}

function xor (a, b) {
	return (a || b) && !(a && b);
}

function symmetric_difference (A, B) {
	out = [];

	A.forEach(function(i) {
		if (!out.includes(i) && xor(A.includes(i), B.includes(i))) {
			out.push(i);
		}
	})

	B.forEach(function(i) {
		if (!out.includes(i) && xor(A.includes(i), B.includes(i))) {
			out.push(i);
		}
	})

	return set(out);
}

function to_string (A) {
	if (A.length == 0) {
		return "&empty;";
	}
	return "{" + A.join(", ") + "}";
}

function log_output (A, B, C) {
	table.innerHTML += "<tr><td>" + to_string(A) + "</td><td>" + to_string(B) + "</td><td>" + to_string(C) + "</td></tr>"
}

function compute_operation () {
	A = set_A.value == "" ? [] : set(set_A.value.split(",").map(sanitize));
	B = set_B.value == "" ? [] : set(set_B.value.split(",").map(sanitize));

	log_output(A, B, symmetric_difference(A, B));

	set_A.value = "";
	set_B.value = "";
	set_A.focus();
}


document.getElementById('compute').onclick = compute_operation
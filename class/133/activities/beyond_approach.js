function capture_event (e) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        compute_operation()
      // Enter pressed
      return false;
    }
}

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

var DECIMAL_PLACES = 10;

function bind (name, x, f) {
    reset_out("");
    var f_in = document.getElementById(name + "_in");
    var f_out = document.getElementById(name + "_out");
    var f_err = document.getElementById(name + "_err");
    var f_sort = document.getElementById(name + "_sort");
    var f_clear = document.getElementById(name + "_clear");

    function reset_out (newHTML) {
        typeset(() => {
          f_out.innerHTML = "<tr><th>\\(x\\)</th><th>\\(" + name + "(x)\\)</th></tr>" + newHTML;
          return [f_out];
        });
    }

    f_clear.onclick = function () {
        reset_out("");
    }

    f_sort.onclick = function () {
        var entries = [];
        var rows = f_out.getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cells = row.getElementsByTagName("td");
            if (cells.length > 1) {
                entries.push([+cells[0].innerHTML, +cells[1].innerHTML]);
            }
        }
        entries.sort(function(a, b){return a[0] - b[0]});

        var newHTML = "";

        for (var i = 0; i < entries.length; i++) {
            entry = entries[i];
            newHTML += "<tr><td>" + entry[0].toFixed(DECIMAL_PLACES) + "</td><td>" + entry[1].toFixed(DECIMAL_PLACES) + "</td></tr>"
        }

        reset_out(newHTML);
    }

    f_in.onkeypress = function (e) {
        f_err.innerHTML = "";
        if (!e) e = window.event;
        var keyCode = e.code || e.key;

        if (keyCode == 'Enter') {
            input = +f_in.value;

            if (input != input) {
                f_err.innerHTML = "<b>Error:</b> This doesn't look like a number to me."
            } else {

                if (input == x) {
                    f_err.innerHTML = "<b>Error:</b> I can't provide an answer when x=" + x + ".";
                } else {
                    f_out.innerHTML += "<tr><td>" + input.toFixed(DECIMAL_PLACES) + "</td><td>" + f(input).toFixed(DECIMAL_PLACES) + "</td></tr>";
                    f_in.value = "";
                }
            }

            return false;
        }
    }
}
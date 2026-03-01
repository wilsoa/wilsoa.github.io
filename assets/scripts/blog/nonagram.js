function format_clue (clue) {
	var out = "";
	for (var i = 0; i < clue.length; i++) {
		out += "<span>" + clue[i] + "</span>"
	}

	return out;
}

function compute_row_clues (solution) {
	var out = [];
	for (var i = 0; i < solution.length; i++) {
		var count = 0;
		var out_row = [];
		const row = solution[i];
		for (var j = 0; j < row.length; j++) {
			if (row[j] == 0) {
				if (count > 0) {
					out_row.push(count);
					count = 0;
				}
			}
			else
			{
				count++;
			}
		}

		if (count > 0) {
			out_row.push(count);
			count = 0;
		}

		out.push(out_row.length == 0 ? [0] : out_row);
	}

	return out;
}

function transpose (matrix) {
	var out = [];
	for (var i = 0; i < matrix[0].length; i++) {
		var out_row = [];
		for (var j = 0; j < matrix.length; j++) {
			out_row.push(matrix[j][i]);
		}

		out.push(out_row);
	}
	return out;
}

function init_nonagram(table, solution) {
	const row = compute_row_clues(solution);
	const col = compute_row_clues(transpose(solution));

	table.classList.add("nonagram");
	var row_clues = [];
	var col_clues = [];
	const row_clue_tr = document.createElement("tr");
	row_clue_tr.innerHTML = "<td></td>"

	for (var i = 0; i < col.length; i++) {
		const td = document.createElement("td");
		td.classList.add("col-clue")
		td.innerHTML = format_clue(col[i]);
		row_clue_tr.appendChild(td);
		row_clues.push(td);
	}
	table.appendChild(row_clue_tr);

	var buttons = [];

	for (var j = 0; j < row.length; j++) {
		const button_row_tr = document.createElement("tr");
		const td = document.createElement("td");
		td.classList.add("row-clue")
		var button_row = [];
		td.innerHTML = format_clue(row[j]);
		button_row_tr.appendChild(td);
		col_clues.push(td);
		table.appendChild(button_row_tr)


		for (var i = 0; i < col.length; i++) {
			const button = document.createElement("td");
			button.classList.add("button");
			button.position = [j,i];
			button_row_tr.appendChild(button);
			button_row.push(button);

			button.addEventListener("click", function (e) {
				button.classList.remove("blocked");
				button.classList.toggle("active");
			})

			button.addEventListener("contextmenu", function (e) {
				e.preventDefault();
				button.classList.remove("active");
				button.classList.toggle("blocked");
				return false;
			})
		}
		buttons.push(button_row);
	}
}
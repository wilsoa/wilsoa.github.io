// Script for computations involving the party mechanic
const widget = document.getElementById("widget");
const party_count = document.getElementById("party_count");
const party_chance = document.getElementById("party_chance");

const CLERIC = 0b1000
const ROGUE = 0b0100
const WARRIOR = 0b0010
const WIZARD = 0b0001

// Let's store each type combination as a binary string
// E.g. cleric+warrior is 0b1010=10
function get_id (type) {
	var arr = [];
	if (type & CLERIC) {
		arr.push("cleric");
	}
	if (type & ROGUE) {
		arr.push("rogue");
	}
	if (type & WARRIOR) {
		arr.push("warrior");
	}
	if (type & WIZARD) {
		arr.push("wizard");
	}

	if (arr.length == 4){
		return "all";
	}

	return arr.length <= 2 ? (arr.length == 0 ? "none" : arr.join("-")) : false;
}

function get_input (type) {
	return document.getElementById(get_id(type));
}

function count (type) {
	const inp = get_input(type);
	return inp ? +get_input(type).value : 0;
}

const fact = (function () {
    const cache = {};
    return function facto(n) {
        if (n === 0 || n === 1 || n != n) {
            return 1;
        }
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = Math.floor(n * facto(n - 1));
        return cache[n];
    };
})();

function binomial (n, k){
	if (n < k) {
		return 0;
	}

	let out = 1;
	// Compute falling factorial (n)_k
	for (var i = n; i > n - k; i--) {
		out *= i;
	}

	return out / fact(k);
}

// Returns all length l
// tuples of non-negative
// integers that sum to k
function weak_tuples (l, k) {
	if (l == 1) {
		return [[k]];
	}
	if (k == 0) {
		let out = [];
		for (let i = 0; i < l; i++) {
			out.push(0);
		}
		return [out];
	}

	let out = [];
	for (let i = 0; i <= k; i++) {
		let remainders = weak_tuples(l - 1, k - i);
		for (let j = 0; j < remainders.length; j++) {
			out.push(([i]).concat(remainders[j]));
		}
	}
	return out;
}

// Returns all multisets of size n of types
// so that each party type is represented
// The multiset is given as an array of length 16
// recording multiplicities
function party_configurations (n) {
	// Pre-generated data
	if (n > 3 && n <= 7) {
		return configuration_data[n-4];
	}
	let out = [];
	// Enumerate the multiplicities for just 4 creatures
	for (let a = 0; a < 5; a++) {
		for (let b = 0; b < 5; b++) {
			for (let c = 0; c < 5; c++) {
				for (let d = 0; d < 5; d++) {
					// Build a base multiplicity tuple
					let base_mult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					// Cleric
					base_mult[(CLERIC) | ((a == 1 || a == 4) ? ROGUE : 0) | ((a == 2 || a == 4) ? WARRIOR : 0) | ((a == 3 || a == 4) ? WIZARD : 0)] += 1;
					// Rogue
					base_mult[((b == 1 || b == 4) ? CLERIC : 0) | (ROGUE) | ((b == 2 || b == 4) ? WARRIOR : 0) | ((b == 3 || b == 4) ? WIZARD : 0)] += 1;
					// Warrior
					base_mult[((c == 2 || c == 4) ? CLERIC : 0) | ((c == 1 || c == 4) ? ROGUE : 0) | (WARRIOR) | ((c == 3 || c == 4) ? WIZARD : 0)] += 1;
					// Wizard
					base_mult[((d == 3 || d == 4) ? CLERIC : 0) | ((d == 1 || d == 4) ? ROGUE : 0) | ((d == 2 || d == 4) ? WARRIOR : 0) | (WIZARD)] += 1;

					// Pad out the remaining multiplicities
					// Note we only consider the types: none, one of the four, two of the four, all (total 12)
					const paddings = weak_tuples(12, n - 4);

					// ISSUE: starting with a base and padding makes some configurations appear multiple times
					for (let j = 0; j < paddings.length; j++) {
						const padding = paddings[j];

						let result = [];
						for (let k = 0; k < 16; k++) {
							result.push(base_mult[k])
						}

						result[0] += padding[0];
						result[CLERIC] += padding[1];
						result[ROGUE] += padding[2];
						result[WARRIOR] += padding[3];
						result[WIZARD] += padding[4];
						result[CLERIC | ROGUE] += padding[5];
						result[CLERIC | WARRIOR] += padding[6];
						result[CLERIC | WIZARD] += padding[7];
						result[ROGUE | WARRIOR] += padding[8];
						result[ROGUE | WIZARD] += padding[9];
						result[WARRIOR | WIZARD] += padding[10];
						result[CLERIC | ROGUE | WARRIOR | WIZARD] += padding[11];

						out.push(JSON.stringify(result));
					}
				}
			}
		}
	}

	return _.map(_.uniq(out), JSON.parse);
}

function number_given_configuration (config) {
	let result = 1;
	for (var type = 0; type < 16; type++) {
		result = result * binomial(count(type), config[type]);
	}
	return result;
}

// Pass in the number of creatures you're searching within
function number_of_parties (n) {
	// Enumerate tuples [a,b,c,d]
	// such that a has cleric, b has rogue, c has warrior, and d has wizard
	// So each has 5 options: no others, one of the other types, all of the other types
	// Then fill the tuple out to n by adding 
	let output = 0;
	const configurations = party_configurations(n);

	for (let i = 0; i < configurations.length; i++) {
		output += number_given_configuration(configurations[i]);
	}

	return output;
}

widget.addEventListener("click", function (e) {
	if (e.target.tagName == "INPUT") {
		e.target.select();
	}
});

// Round to three decimal places
function toProbability (p) {
	return (Math.round(p*1000) / 10) + "%"
}

function perform_computations () {
	const number = number_of_parties(4);
	let total = 0;

	for (var type = 0; type < 16; type++) {
		total += count(type);
	}

	// Probability of party among n creatures
	const party_probabilities = [
		number_of_parties(3)/binomial(total, 3),
		number_of_parties(4)/binomial(total, 4),
		number_of_parties(5)/binomial(total, 5),
		number_of_parties(6)/binomial(total, 6),
		number_of_parties(7)/binomial(total, 7)
	]

	console.log(party_probabilities)

	party_count.innerHTML = number;
	party_chance.innerHTML = "<td>Probability of party:</td><td><b>"
		+ toProbability(party_probabilities[0]) + "</b></td><td><b>"
		+ toProbability(party_probabilities[1]) + "</b></td><td><b>"
		+ toProbability(party_probabilities[2]) + "</b></td><td><b>"
		+ toProbability(party_probabilities[3]) + "</b></td><td><b>"
		+ toProbability(party_probabilities[4]) + "</b></td>";


	const deck_size = +document.getElementById("deck-size").value;

	// Probability of a party in the opening hand
	function probability_of_creatures_in_opening_hand (k) {
		return binomial(total, k)*binomial(deck_size - total, 7 - k)/binomial(deck_size,7)
	}

	let probability_in_opening_hand = probability_of_creatures_in_opening_hand(3) * party_probabilities[0]
									+ probability_of_creatures_in_opening_hand(4) * party_probabilities[1]
									+ probability_of_creatures_in_opening_hand(5) * party_probabilities[2]
									+ probability_of_creatures_in_opening_hand(6) * party_probabilities[3]
									+ probability_of_creatures_in_opening_hand(7) * party_probabilities[4];
	document.getElementById("opening-hand").innerHTML = toProbability(probability_in_opening_hand);
}

function remember_value (e) {
	localStorage.setItem(e.target.id, e.target.value);
}

for (var i = 0; i <= 15; i++) {
	const inp = get_input(i);
	if (inp) {
		inp.addEventListener("keyup", perform_computations);
		inp.addEventListener("change", perform_computations);
		inp.addEventListener("keyup", remember_value);
		inp.addEventListener("change", remember_value);
		inp.value = localStorage.getItem(inp.id) || 0;
	}
}

perform_computations();

// TODO: can make more sophisticated to get things like a rogue that makes a warrior token
function update_scryfall_links () {
	const prefix = document.getElementById("scryfall-prefix").value + " t:creature ";
	for (var type = 0; type <= 15; type++) {
		const link = document.getElementById(get_id(type) + "-link");
		if (link) {
			const term = link.id == "all-link" ? "((t:cleric t:rogue t:warrior t:wizard) or o:changeling)"
					   : (type & CLERIC ? "" : "-") + "t:cleric "
					   + (type & ROGUE ? "" : "-") + "t:rogue "
					   + (type & WARRIOR ? "" : "-") + "t:warrior "
					   + (type & WIZARD ? "" : "-") + "t:wizard ";
			link.href="https://scryfall.com/search?q=" + prefix + term;
		}
	}
	
}

update_scryfall_links();
document.getElementById("scryfall-prefix").addEventListener("keyup", update_scryfall_links);
document.getElementById("scryfall-prefix").addEventListener("change", update_scryfall_links);
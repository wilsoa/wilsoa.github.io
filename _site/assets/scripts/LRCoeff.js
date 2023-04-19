var bigBoxDim = Math.min(40, Math.floor((window.screen.width - 8 ) / 15));
var smallBoxDim = Math.ceil(bigBoxDim * 2 / 4);
if (window.location.href.split("?").length>1) {
    hash = window.location.href.split("?")[1].split("/");
    outerShape=JSON.parse(hash[0]);
    innerShape=JSON.parse(hash[1]);
}
else{
    innerShape = [2,2];
    outerShape = [4,3,2,1]
}
var reverseLexTableau = generateReverseLexTableau(innerShape,outerShape);
var finalAdd = reverseLexTableau[reverseLexTableau.length - 1][0];
var constructedX = 4 + reverseLexTableau[0].length * bigBoxDim + 1.5 * bigBoxDim;

function setup() {
  createCanvas(20 * bigBoxDim + 8, 14 * bigBoxDim + 8);
}

function drawNumbers (xPos, yPos, boxDimension, tableau, colors) {
	textSize(boxDimension * .8)
    textAlign(CENTER, CENTER)
	for (var y = 0; y < tableau.length; y++) {
			var row = tableau[y];
			for (var x = 0; x < row.length; x++) {
				if (colors != null) {
					fill(colors[y][x]);
				}
				else
				{
					fill(color(0,0,0))
				}

				if (row[x] != null) {
					text(row[x], xPos + x * boxDimension + boxDimension / 2, yPos + y * boxDimension + boxDimension / 2)
				}
			}
	}
}

function drawDiagram (xPos, yPos, boxDimension, tableau, colors) {
	for (var y = 0; y < tableau.length; y++) {
		var row = tableau[y];
		for (var x = 0; x < row.length; x++) {
			if (colors != null) {
				fill(colors[y][x]);
			}
			else
			{
				fill(color(255,255,255))
			}

			if (row[x] != null) {
				rect(xPos + x * boxDimension, yPos + y * boxDimension, boxDimension, boxDimension)
			}
		}
	}
}

function mouseOverBox (xPos, yPos, boxDimension, xCoord, yCoord) {
	return mouseX > xPos + boxDimension*xCoord && mouseX < xPos + boxDimension*(xCoord + 1) && mouseY > yPos + boxDimension*yCoord && mouseY < yPos + boxDimension*(yCoord + 1)
}

function generateCornersTableau (tableau) {
	var cornersTableau = [];
	for (var y = 0; y < tableau.length; y++) {
		cornersTableau.push([]);
		var row = cornersTableau[y];
		for (var x = 0; x < tableau[y].length; x++) {
			row.push(null);
		}

		if (y === 0 || tableau[y].length < tableau[y - 1].length) {
			row.push("");
		}
	}
	cornersTableau.push([""]);
	return cornersTableau;
}

function generateReverseLexTableau (innerShape, outerShape) {
	var toAdd = 1;
	var reverseLexTableau = [];

	for (i = 0; i < outerShape.length; i++) {
		reverseLexTableau.push([]);
		var row = reverseLexTableau[i];
		for (j = 0; j < outerShape[i] - (innerShape[i] ? innerShape[i] : 0); j++) {
			row.push(toAdd++);
		}
		for (j = 0; j < innerShape[i]; j++) {
			row.push(null);
		}
		row.reverse();
	}

	return reverseLexTableau;
}

function addBox (xCoord, yCoord, value) {
	if (yCoord === constructedTableau.length) {
		constructedTableau.push([]);
	}

	constructedTableau[yCoord][xCoord] = value;
	cornersTableau = generateCornersTableau(constructedTableau)
}

function positionOfValue (value, tableau) {
	for (var y = 0; y < tableau.length; y++) {
		var row = tableau[y];
		for (var x = 0; x < row.length; x++) {
			if (row[x] === value) {
				return [x,y];
			}
		}
	}
}

function checkLegalAddition (xCoord, yCoord, value) {
	var pos = positionOfValue(value, reverseLexTableau);

	// Check to the right
	if (reverseLexTableau[pos[1]].length > pos[0] + 1) {
		var rightPos = positionOfValue(reverseLexTableau[pos[1]][pos[0] + 1], constructedTableau);
		if (xCoord <= rightPos[0] || yCoord > rightPos[1]) {
			return false;
		}
	}

	// Check above
	if (pos[1] > 0 && reverseLexTableau[pos[1] - 1][pos[0]] !== null) {
		var abovePos = positionOfValue(reverseLexTableau[pos[1] - 1][pos[0]], constructedTableau);
		
		if (xCoord > abovePos[0] || yCoord <= abovePos[1]) {
			return false;
		}
	}

	return true;
}

function compareTableaux (tableau1, tableau2) {
	if (tableau1.length !== tableau2.length) {
		return false;
	}

	for (var y = 0; y < tableau1.length; y++) {
		if (tableau1[y].length !== tableau2[y].length) {
			return false;
		}
		for (var x = 0; x < tableau1[y].length; x++) {
			if (tableau1[y][x] !== tableau2[y][x]) {
				return false;
			}
		}
	}

	return true;
}

var constructedTableau = [[1]]
var nextToAdd = 2;
var cornersTableau = generateCornersTableau(constructedTableau);

function draw() {
  let yellow = color(255, 204, 0)
  let white = color(255, 255, 255);
  let lightBlue = color('#e6faff');
  let lightOrange = color('#ffeee6');
  let blue = color('#00ccff');
  let orange = color('#ff9966');
  

  drawDiagram(4, 4, bigBoxDim, reverseLexTableau);
  drawNumbers(4, 4, bigBoxDim, reverseLexTableau);
  drawDiagram(constructedX, 4, bigBoxDim, constructedTableau);
  drawNumbers(constructedX, 4, bigBoxDim, constructedTableau);

  if (nextToAdd <= finalAdd) {
	  var cornersColors = [];

	  for (var y = 0; y < cornersTableau.length; y++) {
	  	var row = cornersTableau[y];
	  	cornersColors.push([]);
	  	var colorsRow = cornersColors[y];

	  	for (var x = 0; x < row.length; x++) {
	  		if (row[x] === null) {
	  			colorsRow.push(white);
	  		}
	  		else
	  		{
	  			colorsRow.push(checkLegalAddition(x, y, nextToAdd) ? (mouseOverBox(constructedX, 4, bigBoxDim, x, y) ? blue : lightBlue) : (mouseOverBox(constructedX, 4, bigBoxDim, x, y) ? orange : lightOrange))
	  		}
	  	}
	  }

	  drawDiagram(constructedX, 4, bigBoxDim, cornersTableau, cornersColors);
	  drawNumbers(constructedX, 4, bigBoxDim, cornersTableau);
	}
}

var foundTableaux = [];

function drawFoundTableaux () {
	rowLength = Math.floor((20 * bigBoxDim + 8) / (smallBoxDim * 6));

	for (var i = 0; i < foundTableaux.length; i++) {
		xCoord = 4 + (i % rowLength) * smallBoxDim * 6;
		yCoord = 6*bigBoxDim + 8 + Math.floor(i / rowLength) * smallBoxDim * 6;

		drawDiagram(xCoord, yCoord, smallBoxDim, foundTableaux[i]);
	  	drawNumbers(xCoord, yCoord, smallBoxDim, foundTableaux[i]);
	}
}

function recordFoundTableau (tableau) {
	constructedTableau = [[1]]
	nextToAdd = 2;
	cornersTableau = generateCornersTableau(constructedTableau);

	for (var i = 0; i < foundTableaux.length; i++) {
		if (compareTableaux(tableau, foundTableaux[i])) {
			// Duplicate tableau
			drawFoundTableaux();
			return false;
		}
	}

	foundTableaux.push(tableau);
	drawFoundTableaux();

}

function mouseClicked () {
	for (var y = 0; y < cornersTableau.length; y++) {
	  	var row = cornersTableau[y];
	  	for (var x = 0; x < row.length; x++) {
	  		if (row[x] !== null && mouseOverBox(constructedX, 4, bigBoxDim, x, y) && checkLegalAddition(x, y, nextToAdd)) {
	  			addBox(x, y, nextToAdd);
	  			nextToAdd++;
	  			if (nextToAdd > finalAdd) {
	  				clear();
	  				recordFoundTableau(constructedTableau);
	  			}
	  		}
	  	}
  }
}
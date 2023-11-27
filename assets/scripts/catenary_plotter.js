function estimate_catenary (a, b, ya, yb) {
    var precision = 0.00001;
    var prevGuess = 0;

    function beta(alpha) {
        if (alpha > yb) {
        return b;
        }
        return b - alpha * Math.acosh(yb/alpha);
    }

    function f(alpha) {
        return alpha * Math.cosh ((a - beta(alpha))/alpha)-ya;
    }


    function derivative(f) {
        var h = 0.01;
        return function(x) { return (f(x + h) - f(x - h)) / (2 * h); };
    }

    function newtonsMethod(guess) {
        if (guess === null || guess === undefined)
            guess = 0;

        if (Math.abs(prevGuess - guess) > precision) {
            prevGuess = guess;
            var approx = guess - (f(guess) / derivative(f)(guess));

            return newtonsMethod(approx);
        } else {
            return guess;
        }
    }

    // Estimate the alpha and beta for two solutions
    alpha1 = newtonsMethod(0.1);
    alpha2 = newtonsMethod(.9);
    return [[alpha1, beta(alpha1)], [alpha2, beta(alpha2)]];
}



function setup() {
  createCanvas(400, 400);
}

f = {values:[], a:1, b:2, ya:1, yb: 2};

d = 0.01;

function new_catenary (a, b, ya, yb) {
    f.a = a;
    f.b = b;
    f.ya = ya;
    f.yb = yb;
    roots = estimate_catenary(a, b, ya, yb);
    alpha = roots[1][0];
    beta = roots[1][1];
    f.values = [];
    for (i = 0; i < (b - a) / d; i++) {
        f.values.push([a + i * d, alpha*Math.cosh((a + i * d -beta)/alpha)])
    }
    console.log(a, b, ya, yb, roots)
    console.log(alpha*Math.cosh((a -beta)/alpha))
    console.log(alpha*Math.cosh((b -beta)/alpha))
}




function draw() {
    clear()
    circle(f.a * 10, 400 - f.ya * 10, 2)
    circle(f.b * 10, 400 - f.yb * 10, 2)
    stroke("blue")
    strokeWeight(2)
    plot(f.values)
}

function plot (values) {
    line(0,400,400,400)
    for (i = 1; i < values.length; i++) {
        x0 = values[i - 1][0] * 10;
        y0 = 400 - values[i - 1][1] * 10;
        x1 = values[i][0] * 10;
        y1 = 400 - values[i][1] * 10;
        line(x0, y0, x1, y1);
    }
}


new_catenary(2, 6, 10, 8)

function mouseClicked () {
    new_catenary(2, mouseX / 10, 10, (400 - mouseY) / 10);
}
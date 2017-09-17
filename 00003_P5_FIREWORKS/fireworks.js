var fireworks = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    frameRate(50);
    imageMode(CENTER);
}

function draw() {
    background(0, 0, 40);
    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].display();
        fireworks[i].update();
        if (fireworks[i].needRemove()) {
            fireworks.splice(i, 1);
        }

        console.log(fireworks.length);
    }
}

function keyPressed() {
    fireworks.push(new Fireworks());
}

function createLight(rPower, gPower, bPower) {
    var side = 64;
    var center = side / 2.0;

    var img = createImage(side, side);
    img.loadPixels();
    for (var y = 0; y < side; y++) {
        for (var x = 0; x < side; x++) {
            var distance = (sq(center - x) + sq(center - y)) / 10.0;
            var r = int((255 * rPower) / distance);
            var g = int((255 * gPower) / distance);
            var b = int((255 * bPower) / distance);
            img.pixels[x + y * side] = color(r, g, b);
        }
    }

    img.updatePixels();

    return img;
}

function Fireworks(radius) {
    var num = 512;

    var centerPosition = new p5.Vector(random(-width * 4 / 8, width * 4 / 8), random(height / 2, height * 4 / 5), random(-100, 100));
    console.log(centerPosition);
    var velocity = new p5.Vector(0, -22, 0);
    var accel = new p5.Vector(0, 0.4, 0);

    var img;

    var firePosition = [];

    var cosTheta;
    var sinTheta;
    var phi;
    var colorChange = random(0, 5);

    for (var i = 0; i < num; i++) {
        cosTheta = random(0, 1) * 2 - 1;
        sinTheta = sqrt(1 - cosTheta * cosTheta);
        phi = random(0, 1) * 2 * PI;
        firePosition[i] = new p5.Vector(radius * sinTheta * cos(phi), radius * sinTheta * sin(phi), radius * cosTheta);
        firePosition[i] = p5.Vector.mult(firePosition[i], 1.12);
    }

    img = createLight(0.9, random(0.2, 0.5), random(0.2, 0.5));


    this.display = function () {
        for (var i = 0; i < num; i++) {
            push();
            translate(centerPosition.x, centerPosition.y, centerPosition.z);
            translate(firePosition[i].x, firePosition[i].y, firePosition[i].z);
            box(32,32,32, 0, 0);
            pop();

            firePosition[i] = p5.Vector.mult(firePosition[i], 1.015);
        }
    }

    this.update = function () {
        radius = dist(0, 0, 0, firePosition[0].x, firePosition[0].y, firePosition[0].z);
        centerPosition.add(velocity);
        velocity.add(accel);
    }

    this.needRemove = function () {
        if (centerPosition.y - radius > height) {
            return true;
        } else {
            return false;
        }
    }
}
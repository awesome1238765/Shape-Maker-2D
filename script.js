let val1
let b1
let b2
let b3
let b4
let b5
let b6
let b7
let b8
let b9
let i1
let save = false
let can1
function setup() {
	can1 = createCanvas(400, 400)
	background(0)
	b1 = createButton("Create dot")
	b1.mousePressed(makeDot)
	b2 = createButton("Create box")
	b2.mousePressed(makeBox)
	b3 = createButton("Create line")
	b3.mousePressed(makeLine)
	b4 = createButton("Create triangle")
	b4.mousePressed(makeTriangle)
	b5 = createButton("Create point")
	b5.mousePressed(makePoint)
	b6 = createButton("Save your work")
	b6.mousePressed(saveTheScreen)
	b8 = createButton("Random Shape")
	b8.mousePressed(randCreate)
	b7 = createButton("Clear the screen")
	b7.mousePressed(clearScreen)
	b1.id("button")
	b2.id("button")
	b3.id("button")
	b4.id("button")
	b5.id("button")
	b6.id("button")
	b6.id("button")
	b7.id("button")
	b8.id("button")
}
function makeDot() {
	fill(random(0, 255), random(0, 255), random(0, 255))
	strokeWeight(0)
	ellipse(random(0, 400), random(0, 400), 25, 25)
}
function makeBox() {
	fill(random(0, 255), random(0, 255), random(0, 255))
	strokeWeight(0)
	rect(random(0, 400), random(0, 400), 25, 25)
}
function makeLine() {
	stroke(random(0, 255), random(0, 255), random(0, 255))
	strokeWeight(5)
	line(random(0, 400), random(0, 400), random(0, 400), random(0, 400))
}
function makeTriangle() {
	fill(random(0, 255), random(0, 255), random(0, 255))
	strokeWeight(0)
	triangle(random(0, 400), random(0, 400), random(0, 400), random(0, 400), random(0, 400), random(0, 400))
}
function makePoint() {
	stroke(random(0, 255), random(0, 255), random(0, 255))
	strokeWeight(10)
	point(random(0, 400), random(0, 400), random(0, 400))
}
function clearScreen() {
	clear()
	background(0)
	strokeWeight(0)
}
function saveTheScreen() {
	i1 = createInput('Name your File')
	i1.mousePressed(clearI1)
	save = true
}
function keyPressed() {
	if (keyCode == ENTER) {
		if (save == true) {
			saveCanvas(can1, i1.value(), "jpg")
		}
	}
}
function clearI1() {
	i1.value('')
}
function randCreate() {
	val1 = 1
	let rand1 = random(1, 5)
	rand2 = round(rand1)
	if (rand2 == 1) {
		fill(random(0, 255), random(0, 255), random(0, 255))
		strokeWeight(0)
		ellipse(random(0, 400), random(0, 400), 25, 25)
	} else if (rand2 == 2) {
		fill(random(0, 255), random(0, 255), random(0, 255))
		strokeWeight(0)
		rect(random(0, 400), random(0, 400), 25, 25)
	} else if (rand2 == 3) {
		stroke(random(0, 255), random(0, 255), random(0, 255))
		strokeWeight(5)
		line(random(0, 400), random(0, 400), random(0,
			400), random(0, 400))
	} else if (rand2 == 4) {
		fill(random(0, 255), random(0, 255), random(0, 255))
		strokeWeight(0)
		triangle(random(0, 400), random(0, 400), random(0, 400), random(0, 400), random(0, 400), random(0, 400))
	} else if (rand2 == 5) {
		stroke(random(0, 255), random(0, 255), random(0, 255))
		strokeWeight(10)
		point(random(0, 400), random(0, 400), random(0, 400))
	}
}
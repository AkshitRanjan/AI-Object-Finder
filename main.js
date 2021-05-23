status = "";

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 600);
}

function start() {
    cocossd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("object_name_input").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
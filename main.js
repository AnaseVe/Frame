function preload() {
}

function setup() {
    canvas = createCanvas(840, 560);
    canvas.position(350, 270);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 170, 110, 500, 350);
    tint(tint_color);

    fill(204, 0, 153);
    stroke(300, 300, 300);
    rect(141, 73, 555, 19, 80);

    fill(204, 0, 153);
    stroke(300, 300, 300);
    rect(135, 80, 19, 410, 80);

    fill(204, 0, 153);
    stroke(300, 300, 300);
    rect(685, 80, 19, 410, 80);

    fill(204, 0, 153);
    stroke(300, 300, 300);
    rect(138, 473, 559, 19, 80);
}

function filter_tint() {
    tint_color = document.getElementById("tint_color").value ; 
}
function take_snapshot()
{
    console.log('here')
    save('myFilterImage.png');
}


var saveBtn = document.getElementById("save-image");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.style.border = "1px solid black";
let coord = { x: 0, y: 0 };

function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

document.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", draw);
    reposition(event);
});


document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", draw);
});


function draw(event) {
    context.beginPath();
    context.lineWidth = 5;
    context.lineCap = "round";
    context.strokeStyle = "#000000";

    context.moveTo(coord.x, coord.y);
    reposition(event);

    context.lineTo(coord.x, coord.y)
    context.stroke();
}

saveBtn.addEventListener("click", (event) => {
    
});
var actual_x = 0;
var actual_y = 0;
var img = new Image();
var rectangle_width = 30;
var rectangle_height = 40;
var SPEED = 5;

window.onload = function() {
    let canvas = document.createElement('canvas');
    
    var ctx = canvas.getContext("2d");
    canvas.setAttribute("style", "border: 1px solid black;");
    dibujarImagen(ctx, canvas, actual_x, actual_y);
    
    document.body.appendChild(canvas);
    arrowListener(ctx, canvas);
}

function pintarRectangulo(context, x, y) {
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.strokeRect(x, y, rectangle_width, rectangle_height);
}

function arrowListener(context, canvas) {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case "ArrowLeft":
                moverIzquierda(context, canvas);
                break;
            case "ArrowRight":
                moverDerecha(context, canvas);
                break;
            case "ArrowUp":
                moverArriba(context, canvas);
                break;
            case "ArrowDown":
                moverAbajo(context, canvas); 
                break;
        }   
    });
}

function moverIzquierda(context, canvas) {
    if (actual_x - SPEED >= 0) {
        actual_x -= SPEED;
        dibujarImagen(context, canvas, actual_x, actual_y);
    } 
}

function moverDerecha(context, canvas) {
    if (actual_x + SPEED <= img.width - rectangle_width) {
        actual_x += SPEED;
        dibujarImagen(context, canvas, actual_x, actual_y);
    } 
}

function moverArriba(context, canvas) {
    if (actual_y - SPEED >= 0) {
        actual_y -= SPEED;
        dibujarImagen(context, canvas, actual_x, actual_y);
    } 
}

function moverAbajo(context, canvas) {
    if (actual_y + SPEED <= img.height - rectangle_height) {
        actual_y += SPEED;
        dibujarImagen(context, canvas, actual_x, actual_y);
    } 
}

function dibujarImagen(context, canvas, x, y) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    img.src = "./spritesheet.png";
    img.onload = function() {
        canvas.width = img.width * 1.5;
        canvas.height = img.height * 1.2;
        context.drawImage(img, 0, 0);
        pintarRectangulo(context, x, y);
        pintarZoom(context, canvas);
        pintarTextoPosicion(context, x, y);
    }
}

function pintarZoom(context) {
    var zoom = new Image();
    zoom.src = "./spritesheet.png";
    zoom.onload = function() {
        context.drawImage(
            zoom, 
            actual_x, 
            actual_y, 
            rectangle_width, 
            rectangle_height, 
            img.width + 10, 
            0, 
            rectangle_width * 2, 
            rectangle_height * 2
        );
    }
}

function pintarTextoPosicion(context, x, y) {
    context.font = "10px Arial";
    context.fillStyle = "black";
    context.fillText("(" + x + ", " + y + ")", img.width - 47, 10);
}
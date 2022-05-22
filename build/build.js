var bg, ufo;
var undef, categ1, categ2, categ3, categ4, categ5, tout;
function preload() {
    undef = loadImage('Assets/undef.png');
    categ1 = loadImage('Assets/categ1.png');
    categ2 = loadImage('Assets/categ2.png');
    categ3 = loadImage('Assets/categ3.png');
    categ4 = loadImage('Assets/categ4.png');
    categ5 = loadImage('Assets/categ5.png');
    tout = loadImage('Assets/tout.png');
}
var canvas_x = window.innerHeight;
var canvas_y = window.innerHeight;
var ratio = canvas_x / 600;
function setup() {
    createCanvas(canvas_x, canvas_y);
}
function draw() {
    image(tout, 0, 0, canvas_x, canvas_y);
    background(tout, 1);
    circle(mouseX, pmouseY, 10);
    if (mouseY >= 209 * ratio && mouseY < 251 * ratio &&
        ((mouseX > 190 * ratio && mouseX < 234 * ratio) ||
            (mouseX > 295 * ratio && mouseX < 410 * ratio)))
        image(categ1, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 253 * ratio && mouseY < 278 * ratio && mouseX > 190 * ratio &&
        mouseX < 400 * ratio)
        image(categ2, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 278 * ratio && mouseY < 308 * ratio && mouseX > 190 * ratio &&
        mouseX < 390 * ratio)
        image(categ3, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY > 308 * ratio && mouseY < 336 * ratio && mouseX > 205 * ratio &&
        mouseX < 380 * ratio)
        image(categ4, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 336 * ratio && mouseY < 350 * ratio && mouseX > 215 * ratio &&
        mouseX < 365 * ratio)
        image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 350 * ratio && mouseY < 365 * ratio && mouseX > 231 * ratio &&
        mouseX < 340 * ratio)
        image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 365 * ratio && mouseY < 370 * ratio && mouseX > 221 * ratio &&
        mouseX < 335 * ratio)
        image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 370 * ratio && mouseY < 375 * ratio && mouseX > 186 * ratio &&
        mouseX < 327 * ratio)
        image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY >= 375 * ratio && mouseY < 395 * ratio && mouseX > 186 * ratio &&
        mouseX < 327 * ratio)
        image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
    else if (mouseY > 82 * ratio && mouseY < 520 * ratio && mouseX > 186 * ratio &&
        mouseX < 327 * ratio)
        image(undef, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
}
function mouseClicked() {
    console.log(mouseX + ' ' + mouseY);
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 0.84;
var __MARGIN_SIZE = 25;
var p6_canvasStyle = 0;
function __desiredCanvasWidth() {
    if (p6_canvasStyle == 1) {
        var windowRatio = windowWidth / windowHeight;
        if (__ASPECT_RATIO > windowRatio) {
            return windowWidth - __MARGIN_SIZE * 2;
        }
        else {
            return __desiredCanvasHeight() * __ASPECT_RATIO;
        }
    }
    else {
        return windowWidth;
    }
}
function __desiredCanvasHeight() {
    if (p6_canvasStyle == 1) {
        var windowRatio = windowWidth / windowHeight;
        if (__ASPECT_RATIO > windowRatio) {
            return __desiredCanvasWidth() / __ASPECT_RATIO;
        }
        else {
            return windowHeight - __MARGIN_SIZE * 2;
        }
    }
    else {
        return windowHeight;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map
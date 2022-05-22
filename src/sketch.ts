
// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
  Size: 910,
  Download_Image: () => save(),
}
               // add params
               gui.add(params, 'Size', 600, 1800, 1)
// -------------------
//       Menu
// -------------------
var bg, ufo;

let undef, categ1, categ2, categ3, categ4, categ5, tout;

function preload() {
  // load images
  undef = loadImage('Assets/undef.png');
  categ1 = loadImage('Assets/categ1.png');
  categ2 = loadImage('Assets/categ2.png');
  categ3 = loadImage('Assets/categ3.png');
  categ4 = loadImage('Assets/categ4.png');
  categ5 = loadImage('Assets/categ5.png');
  tout = loadImage('Assets/tout.png');
}



function setup() {
  // set canvas size
  p6_CreateCanvas();
}



function draw() {
  let canvas_x = params.Size;
  let canvas_y = params.Size;
  let ratio = canvas_x / 600;
  resizeCanvas(canvas_x, canvas_y);
  if (mouseY >= 209 * ratio && mouseY < 251 * ratio &&
      ((mouseX > 190 * ratio && mouseX < 234 * ratio) ||
       (mouseX > 295 * ratio && mouseX < 410 * ratio)))
    image(categ1, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 253 * ratio && mouseY < 278 * ratio && mouseX > 190 * ratio &&
      mouseX < 400 * ratio)
    image(categ2, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 278 * ratio && mouseY < 308 * ratio && mouseX > 190 * ratio &&
      mouseX < 390 * ratio)
    image(categ3, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY > 308 * ratio && mouseY < 336 * ratio && mouseX > 205 * ratio &&
      mouseX < 380 * ratio)
    image(categ4, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 336 * ratio && mouseY < 350 * ratio && mouseX > 215 * ratio &&
      mouseX < 365 * ratio)
    image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 350 * ratio && mouseY < 365 * ratio && mouseX > 231 * ratio &&
      mouseX < 340 * ratio)
    image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 365 * ratio && mouseY < 370 * ratio && mouseX > 221 * ratio &&
      mouseX < 335 * ratio)
    image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 370 * ratio && mouseY < 375 * ratio && mouseX > 186 * ratio &&
      mouseX < 327 * ratio)
    image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      mouseY >= 375 * ratio && mouseY < 395 * ratio && mouseX > 186 * ratio &&
      mouseX < 327 * ratio)
    image(categ5, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else if (
      (mouseY > 82 * ratio && mouseY < 520 * ratio) &&
      (mouseX > 95 * ratio && mouseX < 510 * ratio))
    image(undef, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
  else
    image(tout, (width / 2) - (canvas_x / 2), 0, canvas_x, canvas_y);
}

function mouseClicked() {
  console.log(mouseX + ' ' + mouseY);
}


// -------------------
//    Initialization
// -------------------


function windowResized() {
  p6_ResizeCanvas()
}